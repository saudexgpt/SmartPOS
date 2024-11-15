<template>
    <div id="ns-sales-chart" class="flex flex-auto flex-col shadow ns-box rounded-lg overflow-hidden">
        <div class="p-2 flex ns-box-header items-center justify-between border-b">
            <h3 class="font-semibold">{{ __( 'Sales Chart' ) }}</h3>
            <div>
                <ns-close-button @click="$emit( 'onRemove' )"></ns-close-button>
            </div>
        </div>
        <div class="p-2">
            <Pie v-if="report" id="chart" :options="chartOptions" :data="chartData"/>
        </div>
    </div>
</template>
<script>
import { __ } from '~/libraries/lang';
import { nsCurrency, nsRawCurrency } from '~/filters/currency';
import { Chart, registerables } from 'chart.js';
import { Pie } from 'vue-chartjs';

Chart.register( ...registerables );

export default {
    name: 'ns-sales-chart',
    components: {
        Pie
    },
    data() {
        return {
            totalWeeklySales: 0,
            totalWeekTaxes: 0,
            totalWeekExpenses: 0,
            totalWeekIncome: 0,
            chartData: {
                labels: [ 'January', 'February', 'March' ],
                datasets: [ { data: [40, 20, 12] } ]
            },
            chartOptions: {
                theme: {
                    mode: window.ns.theme
                },
                chart: {
                    id: 'vuechart-example',
                    width: '100%',
                    height: '100%',
                },
                stroke: {
                    curve: 'smooth',
                    dashArray: [ 0, 8 ]
                },
                xaxis: {
                    categories: []
                },
                colors: [
                    '#5f83f3', '#AAA'
                ],
            },
            series: [{
                label: __( 'Current Week' ),
                data: []
            },{
                label: __( 'Previous Week' ),
                data: []
            }],
            reportSubscription: null,
            report: null
        }
    },
    methods: {
        __,
        nsCurrency, 
        nsRawCurrency,
    },
    mounted() {
        this.reportSubscription     =   Dashboard.weeksSummary.subscribe( data => {
            if ( data.result !== undefined ) {
                this.chartOptions.xaxis.categories  =   data.result.map( r => r.label );
                this.report             =   data;
                this.totalWeeklySales   =   0;
                this.totalWeekIncome    =   0;
                this.totalWeekExpenses  =   0;
                this.totalWeekTaxes     =   0;

                this.report.result.forEach( ( result, index ) => {
                    /**
                     * current week
                     */
                    if ( result.current !== undefined ) {
                        const sales     =   result.current.entries.map( dashboardDay => dashboardDay.day_paid_orders );
                        let total       =   0;

                        if ( sales.length > 0 ) {
                            total       =   sales.reduce( ( b, a ) => b + a );
                        }

                        /**
                         * this compute the week expenses
                         * and taxes for the current week
                         */
                        this.totalWeekExpenses  +=  result.current.entries.map( dashboardDay => parseFloat( dashboardDay.day_expenses ) ).reduce( ( b, a ) => b + a );
                        this.totalWeekTaxes     +=  result.current.entries.map( dashboardDay => parseFloat( dashboardDay.day_taxes ) ).reduce( ( b, a ) => b + a );
                        this.totalWeekIncome    +=  result.current.entries.map( dashboardDay => parseFloat( dashboardDay.day_income ) ).reduce( ( b, a ) => b + a );

                        this.series[ 0 ].data.push( total );
                        
                    } else {
                        this.series[ 0 ].data.push(0);
                    }

                    /**
                     * previous week
                     */
                    if ( result.previous !== undefined ) {
                        const sales     =   result.previous.entries.map( dashboardDay => dashboardDay.day_paid_orders );
                        let total       =   0;

                        if ( sales.length > 0 ) {
                            total       =   sales.reduce( ( b, a ) => b + a );
                        }

                        this.series[ 1 ].data.push( total );
                    } else {
                        this.series[ 1 ].data.push(0);
                    }
                });

                this.totalWeeklySales   =   this.series[0].data.reduce( ( b, a ) => b + a );

                this.chartData.labels   =   this.report.result.map( r => r.label );
                this.chartData.datasets =   this.series;
            }
        });
    }
}
</script>