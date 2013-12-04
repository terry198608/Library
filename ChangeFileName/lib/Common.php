<?php
class Common
{
    public static function getDate()
    {
        return date('YmdHis');
    }
    
    public static function getRandString()
    {
        return self::getDate() . '_' . rand(1,999);
    }
}