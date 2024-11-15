<?php

namespace App\Widgets;

use App\Services\WidgetService;

class SalesChartWidget extends WidgetService
{
    protected $vueComponent = 'nsSalesChart';

    public function __construct()
    {
        $this->name = __( 'Sales Chart' );
        $this->description = __( 'Will display a pie chart of sales.' );
        $this->permission = 'nexopos.see.orders-chart-widget';
    }
}
