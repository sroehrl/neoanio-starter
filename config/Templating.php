<?php

namespace Config;

use Neoan3\Apps\Template\Constants;
use Neoan3\Apps\Template\Template;

class Templating
{
    function __construct()
    {
        Template::ensureDefaults();
        $this->customAttributes();
        $this->customFunctions();
    }
    private function customAttributes(): void
    {
        Constants::addCustomAttribute('n-checked', function($attr, $context){
            if($context[$attr->nodeValue]){
                $attr->parentNode->setAttribute('checked','checked');
            }
        });
    }
    private function customFunctions(): void
    {
        Constants::addCustomFunction('h', function($tag, $additional= null, $indent = 0){
            $open = '<svg style="width: 12px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>';
            $close = '<svg style="width: 12px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>';
            $additional = trim($additional) === 'null' ? '' : $additional;
            $indent = (int) trim($indent) * 15;
            return "<span style='margin-left: {$indent}px'>$open$tag$additional$close</span>";
        });
    }

}