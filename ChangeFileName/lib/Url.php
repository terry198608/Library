<?php
class Url
{
    public function redirect($url)
    {
        header("Location: $url");
        exit;
    }
}