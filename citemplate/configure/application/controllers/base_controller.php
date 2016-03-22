<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
 * base controller
 * 
 * @author yang.tianxiang
*/
class Base_controller extends CI_Controller {

    public function __construct() {
        parent::__construct();
        // DB connect
        $this->load->db_master(TRUE);
        $this->load->db_slave();
        $this->load->redis();
        
       
    }
} 