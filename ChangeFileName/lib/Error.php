<?php

/**
 * 
 * 错误类
 * @author terry
 *
 */
class Error
{
    
    public static function addError($errorMessage)
    {
        $_SESSION['error'][] = $errorMessage;
    }
    
    public static function getError()
    {
        return isset($_SESSION['error']) ? $_SESSION['error'] : array();
    }
    
    public static function hasError()
    {
        return isset($_SESSION['error']);
    }
    
    public static function ClearError()
    {
        unset($_SESSION['error']);
    }
}
