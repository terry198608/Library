<?php

if (!session_id()) {
    session_start();
}
$_SESSION['user_id'] = 1;

if (isset($_SESSION['user_id'])) {
    echo 'success';
} else {
    echo 'false';
}