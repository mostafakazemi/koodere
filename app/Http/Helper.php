<?php
function user()
{
    if (auth()->check())
        return auth()->user();
    return 0;
}

function business()
{
    return auth()->user()->business;
}

function isBusiness()
{
    if (auth()->check() && user()->type == 'business')
        return true;
    return false;
}
