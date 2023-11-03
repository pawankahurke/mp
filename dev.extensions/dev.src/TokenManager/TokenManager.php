<?php

/**
 * Check tokens for validity licenses.
 */
class TokenManager
{
    /**
     *  This code calculates the token for all the places in the database.
     **/
    public static function calcTokens()
    {
        return TokenChecker::calcAllPlaces();
    }
}
