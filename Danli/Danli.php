<?php
class DanLi
{
    //静态成员变量
    private static $_instance;
    public $a = '123';
    
    //私有的构造方法
    private function __construct()
    {
        
    }
    //防止对象被克隆
    public function __clone()
    {
        trigger_error('Clone is not allow!', E_USER_ERROR);
    }
    public static function getInstance()
    {
        if(!(self::$_instance instanceof self)){
            self::$_instance = new self;
        }
        return self::$_instance;
    }
    public function test()
    {
        echo "ok";
    }
}

//错误：$danli = new DanLi(); $danli_clone = clone $danli;
//正确：$danli = DanLi::getInstance(); $danli->test();