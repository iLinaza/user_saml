OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "此用戶賬號已被停用，請聯繫管理員。",
    "Saved" : "已儲存",
    "Could not save" : "無法保存",
    "Provider" : "提供者",
    "Unknown error, please check the log file for more details." : "錯誤不詳，請在日誌檔案檢查更多詳情。",
    "Direct log in" : "直接登入",
    "SSO & SAML log in" : "SSO & SAML 登入",
    "This page should not be visited directly." : "不應直接訪問此頁面。",
    "Provider " : "提供者",
    "X.509 certificate of the Service Provider" : "服務提供者（SP）的 X.509 憑證",
    "Private key of the Service Provider" : "服務提供者（SP）的私鑰",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "表明 SP 發送的 <samlp:logoutRequest> nameID 將被加密。",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "指示此SP發送的<samlp:AuthnRequest>消息是否將被簽名。[SP的元數據將提供此信息]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "表明是否將對此SP發送的 <samlp:logoutRequest> 條消息進行簽名。",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "表明是否將對此SP發送的<samlp:logoutResponse>條消息進行簽名。",
    "Whether the metadata should be signed." : "元數據是否將被簽名。",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "表示此 SP 接收的 <samlp:Response>，<samlp:LogoutRequest> 和 <samlp:LogoutResponse> 的要求。",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "表示此SP接收到的<saml:Assertion>元素需要簽名。[SP的元數據將提供此信息]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "表示要對此SP接收到的 <saml:Assertion> 元素進行加密。",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "表示此 SP 收到的 SAMLResponse 上的 NameID 元素的要求。",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "表示對此 SP 接收到的 NameID 進行加密的要求。",
    "Indicates if the SP will validate all received XML." : "指定 SP 是否驗證所有接收到的 XML。",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS URL - 將 SAML 數據編碼為小寫，默認情況下，該工具包使用大寫。在簽名驗證時啟用 ADFS 兼容性。",
    "Algorithm that the toolkit will use on signing process." : "該工具包將在簽名過程中使用的算法。",
    "Retrieve query parameters from $_SERVER. Some SAML servers require this on SLO requests." : "從$ _SERVER檢索查詢參數。某些SAML伺服器在SLO請求上要求這樣做。",
    "Attribute to map the UID to." : "映射到 UID 的屬性。",
    "Only allow authentication if an account exists on some other backend (e.g. LDAP)." : "僅在其他後端存在賬號時才允許身分驗證（例如 LDAP）。",
    "Attribute to map the displayname to." : "映射到顯示名稱的屬性。",
    "Attribute to map the email address to." : "將電子郵件地址映射到的屬性。",
    "Attribute to map the quota to." : "要將配額映射到的屬性。",
    "Attribute to map the users home to." : "要映射到用戶家目錄的屬性。",
    "Attribute to map the users groups to." : "要映射到用戶分組的屬性。",
    "Attribute to map the users MFA login status" : "映射用戶 MFA 登錄狀態的屬性",
    "Group Mapping Prefix, default: %s" : "群組對應前綴，預設值：%s",
    "Reject members of these groups. This setting has precedence over required memberships." : "拒絕這些組的成員。 此設置優先於所需的成員資格。",
    "Group A, Group B, …" : "群組 A, 群組 B, …",
    "Require membership in these groups, if any." : "要求成為這些群組的成員（如有）。",
    "Email address" : "電郵地址",
    "Encrypted" : "已加密",
    "Entity" : "實體",
    "Kerberos" : "Kerberos",
    "Persistent" : "持久的",
    "Transient" : "瞬態的",
    "Unspecified" : "未明確的",
    "Windows domain qualified name" : "Windows域限定名稱",
    "X509 subject name" : "X509主體名稱",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "可選的身分提供者的顯示名稱（默認：\"SSO及SAML登入\"）",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "允許使用多個用戶後端（例如 LDAP）",
    "SSO & SAML authentication" : "SSO & SAML 認證",
    "Authenticate using single sign-on" : "使用單點登入認證",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "使用 Nextcloud 的 SSO 和 SAML 應用程式，您可以輕鬆地將現有的單點登入解決方案與 Nextcloud 集成。此外，您可以使用 Nextcloud LDAP 用戶提供程序為用戶（例如，共享時）提供便利。\n\n目前支持以下提供程序：\n\n*** SAML 2.0 **\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory聯合身分驗證服務（ADFS）\n\n* **通過環境變量驗證**\n\t* Kerberos（mod_auth_kerb）\n\t*使用環境變量進行身分驗證的任何其他提供程序\n\n從理論上講，實現上述標準之一的任何其他身分驗證提供程序都是兼容的，但我們要指出的是，它們不屬於任何內部測試矩陣。",
    "Open documentation" : "打開文檔",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account will not be possible anymore, unless you enabled \"%s\" or you go directly to the URL %s." : "請確保設置一個能通過SSO訪問實例的管理員用戶。您將無法使用您的普通 %s 賬號登入，除非您啟用 \"%s\" 或直接訪問URL %s。",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account will not be possible anymore, unless you go directly to the URL %s." : "請確保設置一個能通過SSO訪問實例的管理員用戶。您將無法使用您的普通 %s 賬號登入，除非您直接訪問URL %s。",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "請選擇是否要使用 Nextcloud 內置的 SAML 提供商進行身分驗證，還是要根據環境變量進行身分驗證。",
    "Use built-in SAML authentication" : "使用內置 SAML 認證",
    "Use environment variable" : "使用環境變量",
    "Global settings" : "全域設定",
    "Remove identity provider" : "移除身分提供者",
    "Add identity provider" : "添加身分提供者",
    "General" : "常規",
    "Service Provider Data" : "服務提供者（Service Provider）資料",
    "If your Service Provider should use certificates you can optionally specify them here." : "如果您的服務提供商使用證書，您可以在這裡選擇指定。",
    "Show Service Provider settings…" : "顯示伺服器供應商設置...",
    "Name ID format" : "名稱ID格式",
    "Identity Provider Data" : "身分提供者（IdP）資料",
    "Identifier of the IdP entity (must be a URI)" : "IdP 實體的標識符（必須是URI）",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "URL 的目標，其中 SP 將發送驗證請求消息",
    "Show optional Identity Provider settings…" : "顯示可選的身分提供者設置...",
    "URL Location of the IdP where the SP will send the SLO Request" : "URL 在 SP 發送 SLO 請求的 IdP 的位置",
    "URL Location of the IDP's SLO Response" : "IDP 的 SLO 響應的 URL 位置",
    "Public X.509 certificate of the IdP" : "公共 X.509 證書的 IdP",
    "Attribute mapping" : "屬性映射",
    "If you want to optionally map attributes to the user you can configure these here." : "如果要選擇將屬性映射到用戶，可以在這裡配置。",
    "Show attribute mapping settings…" : "顯示屬性映射設置...",
    "Security settings" : "安全設置",
    "For increased security we recommend enabling the following settings if supported by your environment." : "為了提升安全性，如果您的環境支持，建議啟用以下設置。",
    "Show security settings…" : "顯示安全設置...",
    "Signatures and encryption offered" : "提供簽名和加密",
    "Signatures and encryption required" : "需要簽名和加密",
    "User filtering" : "用戶過濾",
    "If you want to optionally restrict user login depending on user data, configure it here." : "如果您想根據用戶數據選擇性地限制用戶登錄，請在此處進行配置。",
    "Show user filtering settings …" : "顯示用戶過濾設置 ...",
    "Download metadata XML" : "下載元數據 XML",
    "Reset settings" : "重置設置",
    "Metadata invalid" : "元數據無效",
    "Metadata valid" : "元數據有效",
    "Error" : "錯誤",
    "Access denied." : "存取被拒絕",
    "Your account is denied, access to this service is thus not possible." : "存取您的帳戶被拒絕，因此無法存取此服務。",
    "Account not provisioned." : "帳號尚未配置",
    "Your account is not provisioned, access to this service is thus not possible." : "您的賬號未配置，因此無法訪問此服務。",
    "Login options:" : "登入選項：",
    "Choose an authentication provider" : "選擇驗證提供者",
    "Group Mapping Prefix, default: SAML_" : "群組對應前綴，預設值：SAML_"
},
"nplurals=1; plural=0;");
