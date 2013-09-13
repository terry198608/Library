<?php
//echo $_SESSION['user_id'] = 1;

//if (!session_id()) {
    session_start();
//}

if(isset($_SESSION['user_id'])) {
    echo 'success';
} else {
    echo 'fail';
}