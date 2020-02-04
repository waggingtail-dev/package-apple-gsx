
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Waggingtail" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Waggingtail.html">Waggingtail</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Waggingtail_AppleGsx" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Waggingtail/AppleGsx.html">AppleGsx</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Waggingtail_AppleGsx_Api" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Waggingtail/AppleGsx/Api.html">Api</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Waggingtail_AppleGsx_Api_Api" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Waggingtail/AppleGsx/Api/Api.html">Api</a>                    </div>                </li>                            <li data-name="class:Waggingtail_AppleGsx_Api_Authenticate" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Waggingtail/AppleGsx/Api/Authenticate.html">Authenticate</a>                    </div>                </li>                            <li data-name="class:Waggingtail_AppleGsx_Api_Repair" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Waggingtail/AppleGsx/Api/Repair.html">Repair</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Waggingtail_AppleGsx_Contracts" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Waggingtail/AppleGsx/Contracts.html">Contracts</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Waggingtail_AppleGsx_Contracts_ApiInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Waggingtail/AppleGsx/Contracts/ApiInterface.html">ApiInterface</a>                    </div>                </li>                            <li data-name="class:Waggingtail_AppleGsx_Contracts_AppleGsxInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Waggingtail/AppleGsx/Contracts/AppleGsxInterface.html">AppleGsxInterface</a>                    </div>                </li>                            <li data-name="class:Waggingtail_AppleGsx_Contracts_AuthenticateInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Waggingtail/AppleGsx/Contracts/AuthenticateInterface.html">AuthenticateInterface</a>                    </div>                </li>                            <li data-name="class:Waggingtail_AppleGsx_Contracts_RepairInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Waggingtail/AppleGsx/Contracts/RepairInterface.html">RepairInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Waggingtail_AppleGsx_Exception" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Waggingtail/AppleGsx/Exception.html">Exception</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Waggingtail_AppleGsx_Exception_AppleGsxException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Waggingtail/AppleGsx/Exception/AppleGsxException.html">AppleGsxException</a>                    </div>                </li>                            <li data-name="class:Waggingtail_AppleGsx_Exception_BadRequestException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Waggingtail/AppleGsx/Exception/BadRequestException.html">BadRequestException</a>                    </div>                </li>                            <li data-name="class:Waggingtail_AppleGsx_Exception_ForbiddenException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Waggingtail/AppleGsx/Exception/ForbiddenException.html">ForbiddenException</a>                    </div>                </li>                            <li data-name="class:Waggingtail_AppleGsx_Exception_Handler" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Waggingtail/AppleGsx/Exception/Handler.html">Handler</a>                    </div>                </li>                            <li data-name="class:Waggingtail_AppleGsx_Exception_ServerErrorException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Waggingtail/AppleGsx/Exception/ServerErrorException.html">ServerErrorException</a>                    </div>                </li>                            <li data-name="class:Waggingtail_AppleGsx_Exception_UnauthorizedException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Waggingtail/AppleGsx/Exception/UnauthorizedException.html">UnauthorizedException</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Waggingtail_AppleGsx_AppleGsx" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Waggingtail/AppleGsx/AppleGsx.html">AppleGsx</a>                    </div>                </li>                            <li data-name="class:Waggingtail_AppleGsx_Config" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Waggingtail/AppleGsx/Config.html">Config</a>                    </div>                </li>                            <li data-name="class:Waggingtail_AppleGsx_ConfigInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Waggingtail/AppleGsx/ConfigInterface.html">ConfigInterface</a>                    </div>                </li>                            <li data-name="class:Waggingtail_AppleGsx_Utility" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Waggingtail/AppleGsx/Utility.html">Utility</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Waggingtail.html", "name": "Waggingtail", "doc": "Namespace Waggingtail"},{"type": "Namespace", "link": "Waggingtail/AppleGsx.html", "name": "Waggingtail\\AppleGsx", "doc": "Namespace Waggingtail\\AppleGsx"},{"type": "Namespace", "link": "Waggingtail/AppleGsx/Api.html", "name": "Waggingtail\\AppleGsx\\Api", "doc": "Namespace Waggingtail\\AppleGsx\\Api"},{"type": "Namespace", "link": "Waggingtail/AppleGsx/Contracts.html", "name": "Waggingtail\\AppleGsx\\Contracts", "doc": "Namespace Waggingtail\\AppleGsx\\Contracts"},{"type": "Namespace", "link": "Waggingtail/AppleGsx/Exception.html", "name": "Waggingtail\\AppleGsx\\Exception", "doc": "Namespace Waggingtail\\AppleGsx\\Exception"},
            {"type": "Interface", "fromName": "Waggingtail\\AppleGsx", "fromLink": "Waggingtail/AppleGsx.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html", "name": "Waggingtail\\AppleGsx\\ConfigInterface", "doc": "&quot;Methods to handle authentication.&quot;"},
                                                        {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method___construct", "name": "Waggingtail\\AppleGsx\\ConfigInterface::__construct", "doc": "&quot;Config constructor.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_getToken", "name": "Waggingtail\\AppleGsx\\ConfigInterface::getToken", "doc": "&quot;The activation\/authentication token.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_setToken", "name": "Waggingtail\\AppleGsx\\ConfigInterface::setToken", "doc": "&quot;Set the activation\/authentication token.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_getApiBaseUrl", "name": "Waggingtail\\AppleGsx\\ConfigInterface::getApiBaseUrl", "doc": "&quot;Get the base url.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_getAppleUserId", "name": "Waggingtail\\AppleGsx\\ConfigInterface::getAppleUserId", "doc": "&quot;Get the apple user email.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_setAppleUserId", "name": "Waggingtail\\AppleGsx\\ConfigInterface::setAppleUserId", "doc": "&quot;Set the apple user email.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_getShipTo", "name": "Waggingtail\\AppleGsx\\ConfigInterface::getShipTo", "doc": "&quot;The ShipTo.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_setShipTo", "name": "Waggingtail\\AppleGsx\\ConfigInterface::setShipTo", "doc": "&quot;Set the ShipTo.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_getSoldTo", "name": "Waggingtail\\AppleGsx\\ConfigInterface::getSoldTo", "doc": "&quot;Get the SoldTo.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_setSoldTo", "name": "Waggingtail\\AppleGsx\\ConfigInterface::setSoldTo", "doc": "&quot;Set the SoldTo.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_getCaBundlePath", "name": "Waggingtail\\AppleGsx\\ConfigInterface::getCaBundlePath", "doc": "&quot;Get the client certificate path.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_setCaBundlePath", "name": "Waggingtail\\AppleGsx\\ConfigInterface::setCaBundlePath", "doc": "&quot;Set the client certificate and passphrase.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_getPassPhrase", "name": "Waggingtail\\AppleGsx\\ConfigInterface::getPassPhrase", "doc": "&quot;Get the client certificate passphrase.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_getOperatorUserId", "name": "Waggingtail\\AppleGsx\\ConfigInterface::getOperatorUserId", "doc": "&quot;Get the operator ID.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_setOperatorUserId", "name": "Waggingtail\\AppleGsx\\ConfigInterface::setOperatorUserId", "doc": "&quot;Set the operator ID.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_isUat", "name": "Waggingtail\\AppleGsx\\ConfigInterface::isUat", "doc": "&quot;Get whether or not the current environment is UAT.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_useUat", "name": "Waggingtail\\AppleGsx\\ConfigInterface::useUat", "doc": "&quot;Set the environment.&quot;"},
            
            {"type": "Interface", "fromName": "Waggingtail\\AppleGsx\\Contracts", "fromLink": "Waggingtail/AppleGsx/Contracts.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "doc": "&quot;Api Interface.&quot;"},
                                                        {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method___construct", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::__construct", "doc": "&quot;Api constructor.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method_getDefaultHeaders", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::getDefaultHeaders", "doc": "&quot;Gets the default headers that are sent with every request.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method_setDefaultHeaders", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::setDefaultHeaders", "doc": "&quot;Sets the default headers that are sent with every request.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method_getPageSize", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::getPageSize", "doc": "&quot;Returns the number of items to return per page.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method_setPageSize", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::setPageSize", "doc": "&quot;Sets the number of items to return per page.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method_getPageNumber", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::getPageNumber", "doc": "&quot;Returns the page number.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method_setPageNumber", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::setPageNumber", "doc": "&quot;Sets the page number.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method__get", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::_get", "doc": "&quot;Send a GET request.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method__post", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::_post", "doc": "&quot;Send a POST request.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method_getClient", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::getClient", "doc": "&quot;Returns an Http client instance.&quot;"},
            
            {"type": "Interface", "fromName": "Waggingtail\\AppleGsx\\Contracts", "fromLink": "Waggingtail/AppleGsx/Contracts.html", "link": "Waggingtail/AppleGsx/Contracts/AppleGsxInterface.html", "name": "Waggingtail\\AppleGsx\\Contracts\\AppleGsxInterface", "doc": "&quot;AppleGsx.&quot;"},
                                                        {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\AppleGsxInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/AppleGsxInterface.html", "link": "Waggingtail/AppleGsx/Contracts/AppleGsxInterface.html#method___construct", "name": "Waggingtail\\AppleGsx\\Contracts\\AppleGsxInterface::__construct", "doc": "&quot;AppleGsx constructor.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\AppleGsxInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/AppleGsxInterface.html", "link": "Waggingtail/AppleGsx/Contracts/AppleGsxInterface.html#method_getConfig", "name": "Waggingtail\\AppleGsx\\Contracts\\AppleGsxInterface::getConfig", "doc": "&quot;Get the Config instance.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\AppleGsxInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/AppleGsxInterface.html", "link": "Waggingtail/AppleGsx/Contracts/AppleGsxInterface.html#method_setConfig", "name": "Waggingtail\\AppleGsx\\Contracts\\AppleGsxInterface::setConfig", "doc": "&quot;Set the Config instance.&quot;"},
            
            {"type": "Interface", "fromName": "Waggingtail\\AppleGsx\\Contracts", "fromLink": "Waggingtail/AppleGsx/Contracts.html", "link": "Waggingtail/AppleGsx/Contracts/AuthenticateInterface.html", "name": "Waggingtail\\AppleGsx\\Contracts\\AuthenticateInterface", "doc": "&quot;Methods to handle authentication.&quot;"},
                                                        {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\AuthenticateInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/AuthenticateInterface.html", "link": "Waggingtail/AppleGsx/Contracts/AuthenticateInterface.html#method_check", "name": "Waggingtail\\AppleGsx\\Contracts\\AuthenticateInterface::check", "doc": "&quot;Returns \&quot;OK\&quot; when apple has configured access for the application.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\AuthenticateInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/AuthenticateInterface.html", "link": "Waggingtail/AppleGsx/Contracts/AuthenticateInterface.html#method_token", "name": "Waggingtail\\AppleGsx\\Contracts\\AuthenticateInterface::token", "doc": "&quot;Returns the authentication token.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\AuthenticateInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/AuthenticateInterface.html", "link": "Waggingtail/AppleGsx/Contracts/AuthenticateInterface.html#method_end", "name": "Waggingtail\\AppleGsx\\Contracts\\AuthenticateInterface::end", "doc": "&quot;Closes the API session, invaliding the API token and return \&quot;OK\&quot;.&quot;"},
            
            {"type": "Interface", "fromName": "Waggingtail\\AppleGsx\\Contracts", "fromLink": "Waggingtail/AppleGsx/Contracts.html", "link": "Waggingtail/AppleGsx/Contracts/RepairInterface.html", "name": "Waggingtail\\AppleGsx\\Contracts\\RepairInterface", "doc": "&quot;Methods to handle repairs.&quot;"},
                                                        {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\RepairInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/RepairInterface.html", "link": "Waggingtail/AppleGsx/Contracts/RepairInterface.html#method_eligibility", "name": "Waggingtail\\AppleGsx\\Contracts\\RepairInterface::eligibility", "doc": "&quot;Returns repair eligibility.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\RepairInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/RepairInterface.html", "link": "Waggingtail/AppleGsx/Contracts/RepairInterface.html#method_details", "name": "Waggingtail\\AppleGsx\\Contracts\\RepairInterface::details", "doc": "&quot;Returns the details for the given repair.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\RepairInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/RepairInterface.html", "link": "Waggingtail/AppleGsx/Contracts/RepairInterface.html#method_summary", "name": "Waggingtail\\AppleGsx\\Contracts\\RepairInterface::summary", "doc": "&quot;Returns a subset of repair information for up to 50 repairs\nmatching the search criteria.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\RepairInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/RepairInterface.html", "link": "Waggingtail/AppleGsx/Contracts/RepairInterface.html#method_productDetails", "name": "Waggingtail\\AppleGsx\\Contracts\\RepairInterface::productDetails", "doc": "&quot;Returns device warranty and agreement details, activation details, replacement history,\nand product model information for a given serial number.&quot;"},
            
            
            {"type": "Class", "fromName": "Waggingtail\\AppleGsx\\Api", "fromLink": "Waggingtail/AppleGsx/Api.html", "link": "Waggingtail/AppleGsx/Api/Api.html", "name": "Waggingtail\\AppleGsx\\Api\\Api", "doc": "&quot;Abstract Class Api.&quot;"},
                                                        {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Api\\Api", "fromLink": "Waggingtail/AppleGsx/Api/Api.html", "link": "Waggingtail/AppleGsx/Api/Api.html#method___construct", "name": "Waggingtail\\AppleGsx\\Api\\Api::__construct", "doc": "&quot;Api constructor.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Api\\Api", "fromLink": "Waggingtail/AppleGsx/Api/Api.html", "link": "Waggingtail/AppleGsx/Api/Api.html#method_getPageNumber", "name": "Waggingtail\\AppleGsx\\Api\\Api::getPageNumber", "doc": "&quot;Returns the page number.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Api\\Api", "fromLink": "Waggingtail/AppleGsx/Api/Api.html", "link": "Waggingtail/AppleGsx/Api/Api.html#method_setPageNumber", "name": "Waggingtail\\AppleGsx\\Api\\Api::setPageNumber", "doc": "&quot;Sets the page number.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Api\\Api", "fromLink": "Waggingtail/AppleGsx/Api/Api.html", "link": "Waggingtail/AppleGsx/Api/Api.html#method__get", "name": "Waggingtail\\AppleGsx\\Api\\Api::_get", "doc": "&quot;Send a GET request.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Api\\Api", "fromLink": "Waggingtail/AppleGsx/Api/Api.html", "link": "Waggingtail/AppleGsx/Api/Api.html#method_getPageSize", "name": "Waggingtail\\AppleGsx\\Api\\Api::getPageSize", "doc": "&quot;Returns the number of items to return per page.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Api\\Api", "fromLink": "Waggingtail/AppleGsx/Api/Api.html", "link": "Waggingtail/AppleGsx/Api/Api.html#method_setPageSize", "name": "Waggingtail\\AppleGsx\\Api\\Api::setPageSize", "doc": "&quot;Sets the number of items to return per page.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Api\\Api", "fromLink": "Waggingtail/AppleGsx/Api/Api.html", "link": "Waggingtail/AppleGsx/Api/Api.html#method_getClient", "name": "Waggingtail\\AppleGsx\\Api\\Api::getClient", "doc": "&quot;Returns an Http client instance.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Api\\Api", "fromLink": "Waggingtail/AppleGsx/Api/Api.html", "link": "Waggingtail/AppleGsx/Api/Api.html#method_getDefaultHeaders", "name": "Waggingtail\\AppleGsx\\Api\\Api::getDefaultHeaders", "doc": "&quot;Gets the default headers that are sent with every request.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Api\\Api", "fromLink": "Waggingtail/AppleGsx/Api/Api.html", "link": "Waggingtail/AppleGsx/Api/Api.html#method_setDefaultHeaders", "name": "Waggingtail\\AppleGsx\\Api\\Api::setDefaultHeaders", "doc": "&quot;Sets the default headers that are sent with every request.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Api\\Api", "fromLink": "Waggingtail/AppleGsx/Api/Api.html", "link": "Waggingtail/AppleGsx/Api/Api.html#method__post", "name": "Waggingtail\\AppleGsx\\Api\\Api::_post", "doc": "&quot;Send a POST request.&quot;"},
            
            {"type": "Class", "fromName": "Waggingtail\\AppleGsx\\Api", "fromLink": "Waggingtail/AppleGsx/Api.html", "link": "Waggingtail/AppleGsx/Api/Authenticate.html", "name": "Waggingtail\\AppleGsx\\Api\\Authenticate", "doc": "&quot;Authenticate Api.&quot;"},
                                                        {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Api\\Authenticate", "fromLink": "Waggingtail/AppleGsx/Api/Authenticate.html", "link": "Waggingtail/AppleGsx/Api/Authenticate.html#method_check", "name": "Waggingtail\\AppleGsx\\Api\\Authenticate::check", "doc": "&quot;Returns \&quot;OK\&quot; when apple has configured access for the application.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Api\\Authenticate", "fromLink": "Waggingtail/AppleGsx/Api/Authenticate.html", "link": "Waggingtail/AppleGsx/Api/Authenticate.html#method_token", "name": "Waggingtail\\AppleGsx\\Api\\Authenticate::token", "doc": "&quot;Returns the authentication token.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Api\\Authenticate", "fromLink": "Waggingtail/AppleGsx/Api/Authenticate.html", "link": "Waggingtail/AppleGsx/Api/Authenticate.html#method_end", "name": "Waggingtail\\AppleGsx\\Api\\Authenticate::end", "doc": "&quot;Closes the API session, invaliding the API token and return \&quot;OK\&quot;.&quot;"},
            
            {"type": "Class", "fromName": "Waggingtail\\AppleGsx\\Api", "fromLink": "Waggingtail/AppleGsx/Api.html", "link": "Waggingtail/AppleGsx/Api/Repair.html", "name": "Waggingtail\\AppleGsx\\Api\\Repair", "doc": "&quot;Repair Api.&quot;"},
                                                        {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Api\\Repair", "fromLink": "Waggingtail/AppleGsx/Api/Repair.html", "link": "Waggingtail/AppleGsx/Api/Repair.html#method_eligibility", "name": "Waggingtail\\AppleGsx\\Api\\Repair::eligibility", "doc": "&quot;Returns repair eligibility.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Api\\Repair", "fromLink": "Waggingtail/AppleGsx/Api/Repair.html", "link": "Waggingtail/AppleGsx/Api/Repair.html#method_details", "name": "Waggingtail\\AppleGsx\\Api\\Repair::details", "doc": "&quot;Returns the details for the given repair.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Api\\Repair", "fromLink": "Waggingtail/AppleGsx/Api/Repair.html", "link": "Waggingtail/AppleGsx/Api/Repair.html#method_summary", "name": "Waggingtail\\AppleGsx\\Api\\Repair::summary", "doc": "&quot;Returns a subset of repair information for up to 50 repairs\nmatching the search criteria.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Api\\Repair", "fromLink": "Waggingtail/AppleGsx/Api/Repair.html", "link": "Waggingtail/AppleGsx/Api/Repair.html#method_productDetails", "name": "Waggingtail\\AppleGsx\\Api\\Repair::productDetails", "doc": "&quot;Returns device warranty and agreement details, activation details, replacement history,\nand product model information for a given serial number.&quot;"},
            
            {"type": "Class", "fromName": "Waggingtail\\AppleGsx", "fromLink": "Waggingtail/AppleGsx.html", "link": "Waggingtail/AppleGsx/AppleGsx.html", "name": "Waggingtail\\AppleGsx\\AppleGsx", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\AppleGsx", "fromLink": "Waggingtail/AppleGsx/AppleGsx.html", "link": "Waggingtail/AppleGsx/AppleGsx.html#method___construct", "name": "Waggingtail\\AppleGsx\\AppleGsx::__construct", "doc": "&quot;AppleGsx constructor.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\AppleGsx", "fromLink": "Waggingtail/AppleGsx/AppleGsx.html", "link": "Waggingtail/AppleGsx/AppleGsx.html#method_getConfig", "name": "Waggingtail\\AppleGsx\\AppleGsx::getConfig", "doc": "&quot;Get the Config instance.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\AppleGsx", "fromLink": "Waggingtail/AppleGsx/AppleGsx.html", "link": "Waggingtail/AppleGsx/AppleGsx.html#method_setConfig", "name": "Waggingtail\\AppleGsx\\AppleGsx::setConfig", "doc": "&quot;Set the Config instance.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\AppleGsx", "fromLink": "Waggingtail/AppleGsx/AppleGsx.html", "link": "Waggingtail/AppleGsx/AppleGsx.html#method___call", "name": "Waggingtail\\AppleGsx\\AppleGsx::__call", "doc": "&quot;Dynamically handles API calls.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\AppleGsx", "fromLink": "Waggingtail/AppleGsx/AppleGsx.html", "link": "Waggingtail/AppleGsx/AppleGsx.html#method_getApiInstance", "name": "Waggingtail\\AppleGsx\\AppleGsx::getApiInstance", "doc": "&quot;Returns the API class instance for the given method.&quot;"},
            
            {"type": "Class", "fromName": "Waggingtail\\AppleGsx", "fromLink": "Waggingtail/AppleGsx.html", "link": "Waggingtail/AppleGsx/Config.html", "name": "Waggingtail\\AppleGsx\\Config", "doc": "&quot;AppleGsx.&quot;"},
                                                        {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Config", "fromLink": "Waggingtail/AppleGsx/Config.html", "link": "Waggingtail/AppleGsx/Config.html#method___construct", "name": "Waggingtail\\AppleGsx\\Config::__construct", "doc": "&quot;Config constructor.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Config", "fromLink": "Waggingtail/AppleGsx/Config.html", "link": "Waggingtail/AppleGsx/Config.html#method_getToken", "name": "Waggingtail\\AppleGsx\\Config::getToken", "doc": "&quot;The activation\/authentication token.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Config", "fromLink": "Waggingtail/AppleGsx/Config.html", "link": "Waggingtail/AppleGsx/Config.html#method_setToken", "name": "Waggingtail\\AppleGsx\\Config::setToken", "doc": "&quot;Set the activation\/authentication token.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Config", "fromLink": "Waggingtail/AppleGsx/Config.html", "link": "Waggingtail/AppleGsx/Config.html#method_getAppleUserId", "name": "Waggingtail\\AppleGsx\\Config::getAppleUserId", "doc": "&quot;Get the apple user email.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Config", "fromLink": "Waggingtail/AppleGsx/Config.html", "link": "Waggingtail/AppleGsx/Config.html#method_setAppleUserId", "name": "Waggingtail\\AppleGsx\\Config::setAppleUserId", "doc": "&quot;Set the apple user email.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Config", "fromLink": "Waggingtail/AppleGsx/Config.html", "link": "Waggingtail/AppleGsx/Config.html#method_getApiBaseUrl", "name": "Waggingtail\\AppleGsx\\Config::getApiBaseUrl", "doc": "&quot;Get the base url.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Config", "fromLink": "Waggingtail/AppleGsx/Config.html", "link": "Waggingtail/AppleGsx/Config.html#method_getShipTo", "name": "Waggingtail\\AppleGsx\\Config::getShipTo", "doc": "&quot;The ShipTo.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Config", "fromLink": "Waggingtail/AppleGsx/Config.html", "link": "Waggingtail/AppleGsx/Config.html#method_setShipTo", "name": "Waggingtail\\AppleGsx\\Config::setShipTo", "doc": "&quot;Set the ShipTo.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Config", "fromLink": "Waggingtail/AppleGsx/Config.html", "link": "Waggingtail/AppleGsx/Config.html#method_getSoldTo", "name": "Waggingtail\\AppleGsx\\Config::getSoldTo", "doc": "&quot;Get the SoldTo.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Config", "fromLink": "Waggingtail/AppleGsx/Config.html", "link": "Waggingtail/AppleGsx/Config.html#method_setSoldTo", "name": "Waggingtail\\AppleGsx\\Config::setSoldTo", "doc": "&quot;Set the SoldTo.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Config", "fromLink": "Waggingtail/AppleGsx/Config.html", "link": "Waggingtail/AppleGsx/Config.html#method_getCaBundlePath", "name": "Waggingtail\\AppleGsx\\Config::getCaBundlePath", "doc": "&quot;Get the client certificate path.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Config", "fromLink": "Waggingtail/AppleGsx/Config.html", "link": "Waggingtail/AppleGsx/Config.html#method_setCaBundlePath", "name": "Waggingtail\\AppleGsx\\Config::setCaBundlePath", "doc": "&quot;Set the client certificate and passphrase.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Config", "fromLink": "Waggingtail/AppleGsx/Config.html", "link": "Waggingtail/AppleGsx/Config.html#method_getPassPhrase", "name": "Waggingtail\\AppleGsx\\Config::getPassPhrase", "doc": "&quot;Get the client certificate passphrase.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Config", "fromLink": "Waggingtail/AppleGsx/Config.html", "link": "Waggingtail/AppleGsx/Config.html#method_getOperatorUserId", "name": "Waggingtail\\AppleGsx\\Config::getOperatorUserId", "doc": "&quot;Get the operator ID.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Config", "fromLink": "Waggingtail/AppleGsx/Config.html", "link": "Waggingtail/AppleGsx/Config.html#method_setOperatorUserId", "name": "Waggingtail\\AppleGsx\\Config::setOperatorUserId", "doc": "&quot;Set the operator ID.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Config", "fromLink": "Waggingtail/AppleGsx/Config.html", "link": "Waggingtail/AppleGsx/Config.html#method_isUat", "name": "Waggingtail\\AppleGsx\\Config::isUat", "doc": "&quot;Get whether or not the current environment is UAT.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Config", "fromLink": "Waggingtail/AppleGsx/Config.html", "link": "Waggingtail/AppleGsx/Config.html#method_useUat", "name": "Waggingtail\\AppleGsx\\Config::useUat", "doc": "&quot;Set the environment.&quot;"},
            
            {"type": "Class", "fromName": "Waggingtail\\AppleGsx", "fromLink": "Waggingtail/AppleGsx.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html", "name": "Waggingtail\\AppleGsx\\ConfigInterface", "doc": "&quot;Methods to handle authentication.&quot;"},
                                                        {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method___construct", "name": "Waggingtail\\AppleGsx\\ConfigInterface::__construct", "doc": "&quot;Config constructor.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_getToken", "name": "Waggingtail\\AppleGsx\\ConfigInterface::getToken", "doc": "&quot;The activation\/authentication token.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_setToken", "name": "Waggingtail\\AppleGsx\\ConfigInterface::setToken", "doc": "&quot;Set the activation\/authentication token.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_getApiBaseUrl", "name": "Waggingtail\\AppleGsx\\ConfigInterface::getApiBaseUrl", "doc": "&quot;Get the base url.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_getAppleUserId", "name": "Waggingtail\\AppleGsx\\ConfigInterface::getAppleUserId", "doc": "&quot;Get the apple user email.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_setAppleUserId", "name": "Waggingtail\\AppleGsx\\ConfigInterface::setAppleUserId", "doc": "&quot;Set the apple user email.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_getShipTo", "name": "Waggingtail\\AppleGsx\\ConfigInterface::getShipTo", "doc": "&quot;The ShipTo.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_setShipTo", "name": "Waggingtail\\AppleGsx\\ConfigInterface::setShipTo", "doc": "&quot;Set the ShipTo.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_getSoldTo", "name": "Waggingtail\\AppleGsx\\ConfigInterface::getSoldTo", "doc": "&quot;Get the SoldTo.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_setSoldTo", "name": "Waggingtail\\AppleGsx\\ConfigInterface::setSoldTo", "doc": "&quot;Set the SoldTo.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_getCaBundlePath", "name": "Waggingtail\\AppleGsx\\ConfigInterface::getCaBundlePath", "doc": "&quot;Get the client certificate path.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_setCaBundlePath", "name": "Waggingtail\\AppleGsx\\ConfigInterface::setCaBundlePath", "doc": "&quot;Set the client certificate and passphrase.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_getPassPhrase", "name": "Waggingtail\\AppleGsx\\ConfigInterface::getPassPhrase", "doc": "&quot;Get the client certificate passphrase.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_getOperatorUserId", "name": "Waggingtail\\AppleGsx\\ConfigInterface::getOperatorUserId", "doc": "&quot;Get the operator ID.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_setOperatorUserId", "name": "Waggingtail\\AppleGsx\\ConfigInterface::setOperatorUserId", "doc": "&quot;Set the operator ID.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_isUat", "name": "Waggingtail\\AppleGsx\\ConfigInterface::isUat", "doc": "&quot;Get whether or not the current environment is UAT.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\ConfigInterface", "fromLink": "Waggingtail/AppleGsx/ConfigInterface.html", "link": "Waggingtail/AppleGsx/ConfigInterface.html#method_useUat", "name": "Waggingtail\\AppleGsx\\ConfigInterface::useUat", "doc": "&quot;Set the environment.&quot;"},
            
            {"type": "Class", "fromName": "Waggingtail\\AppleGsx\\Contracts", "fromLink": "Waggingtail/AppleGsx/Contracts.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "doc": "&quot;Api Interface.&quot;"},
                                                        {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method___construct", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::__construct", "doc": "&quot;Api constructor.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method_getDefaultHeaders", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::getDefaultHeaders", "doc": "&quot;Gets the default headers that are sent with every request.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method_setDefaultHeaders", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::setDefaultHeaders", "doc": "&quot;Sets the default headers that are sent with every request.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method_getPageSize", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::getPageSize", "doc": "&quot;Returns the number of items to return per page.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method_setPageSize", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::setPageSize", "doc": "&quot;Sets the number of items to return per page.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method_getPageNumber", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::getPageNumber", "doc": "&quot;Returns the page number.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method_setPageNumber", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::setPageNumber", "doc": "&quot;Sets the page number.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method__get", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::_get", "doc": "&quot;Send a GET request.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method__post", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::_post", "doc": "&quot;Send a POST request.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/ApiInterface.html", "link": "Waggingtail/AppleGsx/Contracts/ApiInterface.html#method_getClient", "name": "Waggingtail\\AppleGsx\\Contracts\\ApiInterface::getClient", "doc": "&quot;Returns an Http client instance.&quot;"},
            
            {"type": "Class", "fromName": "Waggingtail\\AppleGsx\\Contracts", "fromLink": "Waggingtail/AppleGsx/Contracts.html", "link": "Waggingtail/AppleGsx/Contracts/AppleGsxInterface.html", "name": "Waggingtail\\AppleGsx\\Contracts\\AppleGsxInterface", "doc": "&quot;AppleGsx.&quot;"},
                                                        {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\AppleGsxInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/AppleGsxInterface.html", "link": "Waggingtail/AppleGsx/Contracts/AppleGsxInterface.html#method___construct", "name": "Waggingtail\\AppleGsx\\Contracts\\AppleGsxInterface::__construct", "doc": "&quot;AppleGsx constructor.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\AppleGsxInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/AppleGsxInterface.html", "link": "Waggingtail/AppleGsx/Contracts/AppleGsxInterface.html#method_getConfig", "name": "Waggingtail\\AppleGsx\\Contracts\\AppleGsxInterface::getConfig", "doc": "&quot;Get the Config instance.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\AppleGsxInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/AppleGsxInterface.html", "link": "Waggingtail/AppleGsx/Contracts/AppleGsxInterface.html#method_setConfig", "name": "Waggingtail\\AppleGsx\\Contracts\\AppleGsxInterface::setConfig", "doc": "&quot;Set the Config instance.&quot;"},
            
            {"type": "Class", "fromName": "Waggingtail\\AppleGsx\\Contracts", "fromLink": "Waggingtail/AppleGsx/Contracts.html", "link": "Waggingtail/AppleGsx/Contracts/AuthenticateInterface.html", "name": "Waggingtail\\AppleGsx\\Contracts\\AuthenticateInterface", "doc": "&quot;Methods to handle authentication.&quot;"},
                                                        {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\AuthenticateInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/AuthenticateInterface.html", "link": "Waggingtail/AppleGsx/Contracts/AuthenticateInterface.html#method_check", "name": "Waggingtail\\AppleGsx\\Contracts\\AuthenticateInterface::check", "doc": "&quot;Returns \&quot;OK\&quot; when apple has configured access for the application.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\AuthenticateInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/AuthenticateInterface.html", "link": "Waggingtail/AppleGsx/Contracts/AuthenticateInterface.html#method_token", "name": "Waggingtail\\AppleGsx\\Contracts\\AuthenticateInterface::token", "doc": "&quot;Returns the authentication token.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\AuthenticateInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/AuthenticateInterface.html", "link": "Waggingtail/AppleGsx/Contracts/AuthenticateInterface.html#method_end", "name": "Waggingtail\\AppleGsx\\Contracts\\AuthenticateInterface::end", "doc": "&quot;Closes the API session, invaliding the API token and return \&quot;OK\&quot;.&quot;"},
            
            {"type": "Class", "fromName": "Waggingtail\\AppleGsx\\Contracts", "fromLink": "Waggingtail/AppleGsx/Contracts.html", "link": "Waggingtail/AppleGsx/Contracts/RepairInterface.html", "name": "Waggingtail\\AppleGsx\\Contracts\\RepairInterface", "doc": "&quot;Methods to handle repairs.&quot;"},
                                                        {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\RepairInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/RepairInterface.html", "link": "Waggingtail/AppleGsx/Contracts/RepairInterface.html#method_eligibility", "name": "Waggingtail\\AppleGsx\\Contracts\\RepairInterface::eligibility", "doc": "&quot;Returns repair eligibility.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\RepairInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/RepairInterface.html", "link": "Waggingtail/AppleGsx/Contracts/RepairInterface.html#method_details", "name": "Waggingtail\\AppleGsx\\Contracts\\RepairInterface::details", "doc": "&quot;Returns the details for the given repair.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\RepairInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/RepairInterface.html", "link": "Waggingtail/AppleGsx/Contracts/RepairInterface.html#method_summary", "name": "Waggingtail\\AppleGsx\\Contracts\\RepairInterface::summary", "doc": "&quot;Returns a subset of repair information for up to 50 repairs\nmatching the search criteria.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Contracts\\RepairInterface", "fromLink": "Waggingtail/AppleGsx/Contracts/RepairInterface.html", "link": "Waggingtail/AppleGsx/Contracts/RepairInterface.html#method_productDetails", "name": "Waggingtail\\AppleGsx\\Contracts\\RepairInterface::productDetails", "doc": "&quot;Returns device warranty and agreement details, activation details, replacement history,\nand product model information for a given serial number.&quot;"},
            
            {"type": "Class", "fromName": "Waggingtail\\AppleGsx\\Exception", "fromLink": "Waggingtail/AppleGsx/Exception.html", "link": "Waggingtail/AppleGsx/Exception/AppleGsxException.html", "name": "Waggingtail\\AppleGsx\\Exception\\AppleGsxException", "doc": "&quot;AppleGsxException.&quot;"},
                                                        {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Exception\\AppleGsxException", "fromLink": "Waggingtail/AppleGsx/Exception/AppleGsxException.html", "link": "Waggingtail/AppleGsx/Exception/AppleGsxException.html#method_getError", "name": "Waggingtail\\AppleGsx\\Exception\\AppleGsxException::getError", "doc": "&quot;Returns the error type returned by Apple Gsx.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Exception\\AppleGsxException", "fromLink": "Waggingtail/AppleGsx/Exception/AppleGsxException.html", "link": "Waggingtail/AppleGsx/Exception/AppleGsxException.html#method_setError", "name": "Waggingtail\\AppleGsx\\Exception\\AppleGsxException::setError", "doc": "&quot;Sets the error type returned by Apple Gsx.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Exception\\AppleGsxException", "fromLink": "Waggingtail/AppleGsx/Exception/AppleGsxException.html", "link": "Waggingtail/AppleGsx/Exception/AppleGsxException.html#method_getHeaders", "name": "Waggingtail\\AppleGsx\\Exception\\AppleGsxException::getHeaders", "doc": "&quot;Returns the response headers sent by Apple Gsx.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Exception\\AppleGsxException", "fromLink": "Waggingtail/AppleGsx/Exception/AppleGsxException.html", "link": "Waggingtail/AppleGsx/Exception/AppleGsxException.html#method_setHeaders", "name": "Waggingtail\\AppleGsx\\Exception\\AppleGsxException::setHeaders", "doc": "&quot;Sets the response headers sent by Apple Gsx.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Exception\\AppleGsxException", "fromLink": "Waggingtail/AppleGsx/Exception/AppleGsxException.html", "link": "Waggingtail/AppleGsx/Exception/AppleGsxException.html#method_getRawOutput", "name": "Waggingtail\\AppleGsx\\Exception\\AppleGsxException::getRawOutput", "doc": "&quot;Returns raw output returned by Apple Gsx.&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Exception\\AppleGsxException", "fromLink": "Waggingtail/AppleGsx/Exception/AppleGsxException.html", "link": "Waggingtail/AppleGsx/Exception/AppleGsxException.html#method_setRawOutput", "name": "Waggingtail\\AppleGsx\\Exception\\AppleGsxException::setRawOutput", "doc": "&quot;Sets the raw output parameter returned by Apple Gsx.&quot;"},
            
            {"type": "Class", "fromName": "Waggingtail\\AppleGsx\\Exception", "fromLink": "Waggingtail/AppleGsx/Exception.html", "link": "Waggingtail/AppleGsx/Exception/BadRequestException.html", "name": "Waggingtail\\AppleGsx\\Exception\\BadRequestException", "doc": "&quot;BadRequest Exception.&quot;"},
                    
            {"type": "Class", "fromName": "Waggingtail\\AppleGsx\\Exception", "fromLink": "Waggingtail/AppleGsx/Exception.html", "link": "Waggingtail/AppleGsx/Exception/ForbiddenException.html", "name": "Waggingtail\\AppleGsx\\Exception\\ForbiddenException", "doc": "&quot;Forbidden Exception.&quot;"},
                    
            {"type": "Class", "fromName": "Waggingtail\\AppleGsx\\Exception", "fromLink": "Waggingtail/AppleGsx/Exception.html", "link": "Waggingtail/AppleGsx/Exception/Handler.html", "name": "Waggingtail\\AppleGsx\\Exception\\Handler", "doc": "&quot;Exception Handler.&quot;"},
                                                        {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Exception\\Handler", "fromLink": "Waggingtail/AppleGsx/Exception/Handler.html", "link": "Waggingtail/AppleGsx/Exception/Handler.html#method___construct", "name": "Waggingtail\\AppleGsx\\Exception\\Handler::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Exception\\Handler", "fromLink": "Waggingtail/AppleGsx/Exception/Handler.html", "link": "Waggingtail/AppleGsx/Exception/Handler.html#method_handleException", "name": "Waggingtail\\AppleGsx\\Exception\\Handler::handleException", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Waggingtail\\AppleGsx\\Exception", "fromLink": "Waggingtail/AppleGsx/Exception.html", "link": "Waggingtail/AppleGsx/Exception/ServerErrorException.html", "name": "Waggingtail\\AppleGsx\\Exception\\ServerErrorException", "doc": "&quot;ServerError Exception.&quot;"},
                    
            {"type": "Class", "fromName": "Waggingtail\\AppleGsx\\Exception", "fromLink": "Waggingtail/AppleGsx/Exception.html", "link": "Waggingtail/AppleGsx/Exception/UnauthorizedException.html", "name": "Waggingtail\\AppleGsx\\Exception\\UnauthorizedException", "doc": "&quot;Unauthorized Exception.&quot;"},
                    
            {"type": "Class", "fromName": "Waggingtail\\AppleGsx", "fromLink": "Waggingtail/AppleGsx.html", "link": "Waggingtail/AppleGsx/Utility.html", "name": "Waggingtail\\AppleGsx\\Utility", "doc": "&quot;Library utilities.&quot;"},
                                                        {"type": "Method", "fromName": "Waggingtail\\AppleGsx\\Utility", "fromLink": "Waggingtail/AppleGsx/Utility.html", "link": "Waggingtail/AppleGsx/Utility.html#method_prepareParameters", "name": "Waggingtail\\AppleGsx\\Utility::prepareParameters", "doc": "&quot;Prepare parameters for query.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


