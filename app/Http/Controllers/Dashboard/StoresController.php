<?php

namespace App\Http\Controllers\Dashboard;

// use App\Http\Controllers\Controller;
use App\Crud\StoreCrud;
use App\Http\Controllers\DashboardController;
use App\Models\Store;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Session;

class StoresController extends DashboardController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = $this->getUser();
        $store_id = $user->selected_store;
        $stores = Store::orderBy('name')->get();
        return response()->json(compact('stores', 'store_id'), 200);
    }

    public function setSelectedStore(Request $request)
    {
        $user = $this->getUser();
        $store_id = $request->store_id;
        $user->selected_store = $store_id;
        $user->save();
        if ($store_id != 1) {
                
            // Session::put('connection', 'mysql_'.$store_id);
            session(['connection' => 'mysql_'.$store_id]);
        }else {

            // Session::put('connection', 'mysql');
            session(['connection' => 'mysql']);
        }
        
        $store = Store::find($store_id);
        Session::put('active_store', $store->name.' is currently active');
        return response()->json(['message' => 'Store Changed'], 200);

    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // return StoreCrud::form();
        ns()->restrict( [ 'nexopos.create.stores' ] );

        return View::make( 'pages.dashboard.stores.create', [
            'title' => __( 'Create a store' ),
            'description' => __( 'Add a new store outlet on the system' ),
            'submitUrl' => ns()->url( '/api/stores/save' ),
            'returnUrl' => ns()->url( '/dashboard/stores' ),
            // 'unitsUrl' => ns()->url( '/api/units-groups/{id}/units' ),
        ] );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        return $request;
    }

    /**
     * Display the specified resource.
     */
    public function show(Store $store)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Store $store)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Store $store)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Store $store)
    {
        //
    }
}
