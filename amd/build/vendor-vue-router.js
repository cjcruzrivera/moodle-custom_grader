'use strict';define(['jquery'],function(a){a('head').append('<style>'+'              .loading_indicator {                border: 16px solid #bdbdbd;                border-radius: 50%;                border-top: 16px solid red;                width: 100px;                height: 100px;                -webkit-animation: spin 2s linear infinite; /* Safari */                animation: spin 2s linear infinite;              }              @-webkit-keyframes spin {                0% { -webkit-transform: rotate(0deg); }                100% { -webkit-transform: rotate(360deg); }              }              @keyframes spin {                0% { transform: rotate(0deg); }                100% { transform: rotate(360deg); }              }            '+'</style>'),a('body').append('            <div                 class="loading_indicator"                style="                    position: fixed;                    bottom: 20px;                    right: 20px;                    z-index: 9999;                    width: 70px;                    height: 70px;                    display:none;                ">            </div>            '),a('.loading_indicator').css('z-index',9999);var d=0;console.log('Loading indicator initialised');return{show:function e(){d++,a('.loading_indicator').show()},hide:function f(){d--,0==d&&a('.loading_indicator').hide()}}});