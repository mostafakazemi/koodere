<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckBusiness
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (isBusiness())
            return $next($request);
        return redirect('/');
    }
}
