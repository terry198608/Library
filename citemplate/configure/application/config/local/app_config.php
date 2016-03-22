<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

#slave databases
$config['db_slave_list'] = array('slave');

#redis config
$config['redis']['hostname'] = '127.0.0.1';
$config['redis']['port']     = '6379';