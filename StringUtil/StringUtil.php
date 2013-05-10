<?php

namespace Zenken\CommonBundle\Util;
/**
 * 
 * String operation util
 *
 */
class StringUtil
{
    /**
     * 
     * String replace helper
     * @param $str
     * @param $arrRep
     */
    public static function strReplace($str, $arrRep)
    {
        $str = strtr($str, $arrRep);
        return $str;
    }
    
    /**
     * 
     * @param  $str
     */
    public static function makeSemiangle($str)
    {
        $arr = array('０' => '0', '１' => '1', '２' => '2', '３' => '3', '４' => '4','５' => '5', '６' => '6', '７' => '7', '８' => '8', '９' => '9', 'Ａ' => 'A', 'Ｂ' => 'B', 'Ｃ' => 'C', 'Ｄ' => 'D', 'Ｅ' => 'E','Ｆ' => 'F', 'Ｇ' => 'G', 'Ｈ' => 'H', 'Ｉ' => 'I', 'Ｊ' => 'J', 'Ｋ' => 'K', 'Ｌ' => 'L', 'Ｍ' => 'M', 'Ｎ' => 'N', 'Ｏ' => 'O','Ｐ' => 'P', 'Ｑ' => 'Q', 'Ｒ' => 'R', 'Ｓ' => 'S', 'Ｔ' => 'T', 'Ｕ' => 'U', 'Ｖ' => 'V', 'Ｗ' => 'W', 'Ｘ' => 'X', 'Ｙ' => 'Y','Ｚ' => 'Z', 'ａ' => 'a', 'ｂ' => 'b', 'ｃ' => 'c', 'ｄ' => 'd','ｅ' => 'e', 'ｆ' => 'f', 'ｇ' => 'g', 'ｈ' => 'h', 'ｉ' => 'i','ｊ' => 'j', 'ｋ' => 'k', 'ｌ' => 'l', 'ｍ' => 'm', 'ｎ' => 'n','ｏ' => 'o', 'ｐ' => 'p', 'ｑ' => 'q', 'ｒ' => 'r', 'ｓ' => 's', 'ｔ' => 't', 'ｕ' => 'u', 'ｖ' => 'v', 'ｗ' => 'w', 'ｘ' => 'x', 'ｙ' => 'y', 'ｚ' => 'z','（' => '(', '）' => ')', '〔' => '[', '〕' => ']', '【' => '[','】' => ']', '〖' => '[', '〗' => ']', '“' => '[', '”' => ']','‘' => '[', '\'' => ']', '｛' => '{', '｝' => '}', '《' => '<','》' => '>','％' => '%', '＋' => '+', '—' => '-', '－' => '-', '～' => '-','：' => ':', '。' => '.', '、' => ',', '，' => '.', '、' => '.', '；' => ',', '？' => '?', '！' => '!', '…' => '-', '‖' => '|', '”' => '"', '\'' => '`', '‘' => '`', '｜' => '|', '〃' => '"','　' => ' ');
        return strtr($str, $arr);
    }
    
    /**
     * 
     * get first word
     * @param $word
     */
    public static function getFirstLetter($word)
    {
        $data = array(
            'あ' => array('あ', 'い', 'う', 'え', 'お'),
            'か' => array('か', 'き', 'く', 'け', 'こ','が','ぎ','ぐ','げ','ご','きゃ','きゅ','きょ','ぎゃ','ぎゅ','ぎょ'),
            'さ' => array('さ', 'し', 'す', 'せ', 'そ','ざ','じ','ず','ぜ','ぞ','しゃ','しゅ','しょ','じゃ','じゅ','じょ'),
            'た' => array('た', 'ち', 'つ', 'て', 'と','だ','ぢ','づ','で','ど','ちゃ','ちゅ','ちょ','ぢゃ','ぢゅ','ぢょ'),
            'な' => array('な', 'に', 'ぬ', 'ね', 'の','にゃ','にゅ','にょ'),
            'は' => array('は', 'ひ', 'ふ', 'へ', 'ほ','ば','び','ぶ','べ','ぼ','ぱ','ぴ','ぷ','ぺ','ぽ','ひゃ','ひゅ','ひょ','びゃ','びゅ','びょ','ぴゃ','ぴゅ','ぴょ'),
            'ま' => array('ま', 'み', 'む', 'め', 'も','みゃ','みゅ','みょ'),
            'や' => array('や', 'ゆ', 'よ'),
            'ら' => array('ら', 'り', 'る', 'れ', 'ろ','りゃ','りゅ','りょ'),
            'わ' => array('わ', 'を')
        );
        
        $wordFirstLetter = StringUtil::uft8Substr($word, 1);
    
        foreach ($data as $k => $v) {
            if (in_array($wordFirstLetter, $v)) {
                return $k;
            }
        }
        
        return '';
    }
    
    /**
     * 
     * 
     * @param  $string
     * @param  $sublen
     * @param  $start
     */
    public static function uft8Substr($string, $sublen, $start = 0)
    {
        $pa ="/[\x01-\x7f]|[\xc2-\xdf][\x80-\xbf]|\xe0[\xa0-\xbf][\x80-\xbf]|[\xe1-\xef][\x80-\xbf][\x80-\xbf]|\xf0[\x90-\xbf][\x80-\xbf][\x80-\xbf]|[\xf1-\xf7][\x80-\xbf][\x80-\xbf][\x80-\xbf]/";
        preg_match_all($pa, $string, $t_string); if(count($t_string[0]) - $start > $sublen) return join('', array_slice($t_string[0], $start, $sublen));
        return join('', array_slice($t_string[0], $start, $sublen));
    } 
    
}