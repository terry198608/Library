<?php

$config = array(
                 	  'regist' => array(
                                    array(
                                            'field' => 'email',
                                            'label' => '账号(邮箱)',
                                            'rules' => 'trim|required|valid_email|callback_email_check[email]'
                                        ),
                                    array(
                                            'field' => 'password',
                                            'label' => '密码',
                                            'rules' => 'required|min_length[6]|max_length[20]'
                                        ),
                                    array(
                                            'field' => 'repassword',
                                            'label' => '确认密码',
                                            'rules' => 'required|matches[password]'
                                        )
                                    )
               );