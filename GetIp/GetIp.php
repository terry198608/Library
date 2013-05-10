<?php
 /**
 * 获取用户真实 IP
 */
function getIP()
{
    static $realIp;
    if (isset($_SERVER)){
        if (isset($_SERVER["HTTP_X_FORWARDED_FOR"])){
            $realIp = $_SERVER["HTTP_X_FORWARDED_FOR"];
        } else if (isset($_SERVER["HTTP_CLIENT_IP"])) {
            $realIp = $_SERVER["HTTP_CLIENT_IP"];
        } else {
            $realIp = $_SERVER["REMOTE_ADDR"];
        }
    } else {
        if (getenv("HTTP_X_FORWARDED_FOR")){
            $realIp = getenv("HTTP_X_FORWARDED_FOR");
        } else if (getenv("HTTP_CLIENT_IP")) {
            $realIp = getenv("HTTP_CLIENT_IP");
        } else {
            $realIp = getenv("REMOTE_ADDR");
        }
    }

    return $realIp;
}
 
 
 /**
 * 获取 IP  地理位置
 * 淘宝IP接口
 * @Return: array
 */
function getCity($ip)
{
    $url="http://ip.taobao.com/service/getIpInfo.php?ip=".$ip;
    $ip=json_decode(file_get_contents($url));
    if((string)$ip->code=='1'){
        return false;
    }
    $data = (array)$ip->data;
    return $data;
}

$ip = getIP();
echo 'Your ip is ' . $ip;