<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $coupon_id
 * @property int $group_id
 */
class CouponCustomerGroup extends Model
{
    use HasFactory;

    protected $connection = 'mysql';
    public $timestamps = false;

    protected $table = 'nexopos_' . 'coupons_customers_groups';

    public function coupon()
    {
        return $this->belongsTo( Coupon::class );
    }

    public function group()
    {
        return $this->hasOne( CustomerGroup::class );
    }
}
