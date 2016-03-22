<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * 
 * base model
 * @author yang.tianxiang
 *
 */
class Db_model extends CI_Model {

    protected $db_obj;
    
    public function __construct() {
        parent::__construct();
        
    }
    

    // getter/setter
    public function get_db_obj() {
        if (!isset($this->db_obj)) {
            throw new Exception('DB connect error');
        }
        return $this->db_obj;
    }

    public function set_db_obj($db_obj) {
        $this->db_obj   = $db_obj;
    }
    
    public function insert_data($table, $data) {
    	$data['created_at'] = get_now_time();
    	$data['updated_at'] = get_now_time();
    	$this->get_db_obj()->insert($table, $data);
    	return $this->get_db_obj()->insert_id();
    }
    
    public function update_data($table, $data, $where) {
    	$data['updated_at'] = get_now_time();
    	foreach($data as $k => $v) {
    		if (strstr($k, 	'__uc_')) {
    			$this->get_db_obj()->set(str_replace('__uc_','', $k), $v, false);
    		} else {
    			$this->get_db_obj()->set($k, $v);
    		}
    	}
    	$this->get_db_obj()->where($where);
    	return $this->get_db_obj()->update($table);
    }
    
    public function delete_data($table, $where, $data = array()) {
    	$data['is_active'] = 0;
    	$data['deleted_at'] = get_now_time();
    	
    	return $this->get_db_obj()->update($table, $data, $where);
    }
    
    public function format_sql($order = null, $limit = null, $offset = null, $c = null, $group_by = null) {
    	$bind_array = array();
    	$sql = '';
    	if ($order) {
			$i = 1;
			foreach ($order as $k => $v) {
				if($i===1) {
					if ($c) {
						if (strtoupper($v) == 'DESC') {
							$sql .= ' AND '. $k .' <= ?';
						} else {
							$sql .= ' AND '. $k .' >= ?';
						}
						$bind_array[] = $c;
					}
					if ($group_by) {
						$sql .= ' GROUP BY '.join(",", $group_by);
					}
					$sql .= ' ORDER BY ';
				}
				if($i == count($order)) {
					$sql .= "$k $v";
				} else {
					$sql .= "$k $v,";
				}
				$i++;
			}
		} else {
			if ($group_by) {
				$sql .= ' GROUP BY '.join(",", $group_by);
			}
		}
		
		if ($limit) {
			$sql .=  ' LIMIT ?';
			$bind_array[] = (int)$limit;
		}
		if ($offset) {
			$sql .=  ' OFFSET ?';
			$bind_array[] = (int)$offset;
		}
		return array('sql' => $sql, 'bind_array' => $bind_array);
    }
	
	public function delete($table, $where){
		return $this->get_db_obj()->delete($table, $where);
	}
} 
