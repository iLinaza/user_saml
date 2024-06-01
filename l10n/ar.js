OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "تم تعطيل حساب هذا المستخدم، يرجى الاتصال بالمسؤول.",
    "Saved" : "تم الإحتفاظ به",
    "Could not save" : "تعذّر الحفظ",
    "Provider" : "المزوّد",
    "Unknown error, please check the log file for more details." : "خطأ غير معروف، يرجى التحقق من ملف السجل لمزيد من التفاصيل.",
    "Direct log in" : "تسجيل الدخول المباشر",
    "SSO & SAML log in" : "تسجيل الدخول عبر  SSO ومصادقة SAML",
    "This page should not be visited directly." : "لا ينبغي زيارة هذه الصفحة مباشرة.",
    "Provider " : "المزوّد",
    "X.509 certificate of the Service Provider" : "شهادة X.509 لمزود الخدمة",
    "Private key of the Service Provider" : "المفتاح الشخصي لموفر الخدمة",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "يشير إلى أن معرّفاسم الـ<samlp:logoutRequest> المرسل من قبل مزود الخدمة هذا سيتم تشفيره.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "يشير إلى متطلبات توقيع رسائل<samlp:AuthnRequest>التي تم إرسالها من قبل مزود الخدمة هذا.[تتيح بيانات التعريف الوصفية لمزود الخدمة هذه المعلومات]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "يشير إلى ما إذا كانت رسائل الـ<samlp:logoutRequest> المرسلة من قبل مزود الخدمة هذا سيتم توقيعها.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "يشير إلى ما إذا كانت رسائل الـ<samlp:logoutResponse> المرسلة من قبل مزود الخدمة هذا سيتم توقيعها.",
    "Whether the metadata should be signed." : " ما إذا كان يجب توقيع البيانات الوصفية/التعريفية.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "يشير إلى متطلبات توقيع عناصر <samlp:Response>،<samlp:LogoutRequest> و<samlp:LogoutResponse> التي تلقاها مزود الخدمة هذا.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "يشير إلى متطلبات توقيع عناصر <saml:Assertion>التي تلقاها مزود الخدمة هذا.[تتيح بيانات التعريف الوصفية  لمزود الخدمة هذه المعلومات]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "يشير إلى متطلبات تشفير عناصر <saml:Assertion>التي تلقاها مزود الخدمة هذا.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "يشير إلى متطلب وجود عنصر معرف الاسم \"NameID\" فى رد SAML التى تلقاها مقدم الخدمة هذا.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "تعذر العثور على أي قسم في المستند",
    "Indicates if the SP will validate all received XML." : "يشير إلى ما إذا كان مزود الخدمة سوف يقوم بالتحقق من صحة كل بيانات المستلمة بتنسيق XML.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "عنوان URL لخدمات جهات الاتصال الخارجية للدليل النشط \" ADFS \" - تشفر بشكل افتراضي بيانات لغة التكويد SAML  كأحرف صغيرة، ومجموعة الأدوات كأحرف كبيرة. يجب التمكين من أجل توافق خدمات جها الاتصال الخارجية للدليل النشط \"ADFS\" عند التحقق من التوقيع.",
    "Algorithm that the toolkit will use on signing process." : "الخوارزمية التي تستخدمها مجموعة الأدوات في عملية التوقيع.",
    "Retrieve query parameters from $_SERVER. Some SAML servers require this on SLO requests." : "استرداد معلمات الاستعلام من $ _SERVER. تتطلب بعض خوادم SAML هذا في طلبات تسجيل الخروج الفردي.",
    "Attribute to map the UID to." : "خاصية تعيين معرف فريد \"UID \" إلى.",
    "Only allow authentication if an account exists on some other backend (e.g. LDAP)." : "السماح بالمصادقة فقط إذا كان الحساب موجودًا على بعض الواجهات الخلفية backend الأخرى (مثل LDAP).",
    "Attribute to map the displayname to." : "السمة لتعيين اسم العرض إلى.",
    "Attribute to map the email address to." : "السمة لتعيين عنوان البريد الإلكتروني إلى.",
    "Attribute to map the quota to." : "السمة لتعيين الحصة إلى.",
    "Attribute to map the users home to." : "السمة لتعيين الصفحة الرئيسية للمستخدمين إلى.",
    "Attribute to map the users groups to." : "السمة لتعيين مجموعات المستخدمين إلى.",
    "Attribute to map the users MFA login status" : "السمة لتعيين حالة تسجيل دخول مستخدمي المصادقة ثنائية العوامل",
    "Group Mapping Prefix, default: %s" : "بادئة تعيين المجموعة Group Mapping Prefix، التلقائية: %s",
    "Reject members of these groups. This setting has precedence over required memberships." : "رفض أعضاء هذه المجموعات. هذا الإعداد له الأسبقية على العضويات المطلوبة.",
    "Group A, Group B, …" : "المجموعة أ ، المجموعة ب ، ...",
    "Require membership in these groups, if any." : "يتطلب العضوية في هذه المجموعات، إن وجدت.",
    "Email address" : "عنوان البريد الإلكتروني",
    "Encrypted" : "مشفّر",
    "Entity" : "الكيان",
    "Kerberos" : "بروتوكول المصادقة Kerberos",
    "Persistent" : "مستمر",
    "Transient" : "عابر",
    "Unspecified" : "غير محدد",
    "Windows domain qualified name" : "اسم نطاق ويندوز المؤهل",
    "X509 subject name" : "اسم موضوع معيار X509",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "اسم العرض الاختياري لمزود الهوية (الافتراضي: \"تسجيل الدخول عبر تسجيل الدخول الأحادي \"SSO \" و SAML\")",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "السماح باستخدام واجهات مستخدم متعددة (على سبيل المثال خادوم بروتوكول LDAP)",
    "SSO & SAML authentication" : "المصادقة عبر SSO و SAML",
    "Authenticate using single sign-on" : "المصادقة باستخدام تسجيل الدخول الأحادي",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "باستخدام تطبيق لغة تSAML وتسجيل الدخول الأحادي \"SSO\" في نكست كلود، يمكنك بسهولة دمج حل تسجيل الدخول الأحادي الحالي مع نكست كلود. بالإضافة إلى ذلك، يمكنك استخدام مزود مستخدم خادوم بNextcloud LDAP للحفاظ على الملائمة والراحة للمستخدمين. (على سبيل المثال، أثناء المشاركة) \nيتم دعم واختبار مزودي الخدمات التاليين في الوقت الحالي:\n\n* ** SAML 2.0 **\n\t * OneLogin\n\t * Shibboleth\n\t * خدمات جهات الاتصال الخارجية للدليل النشط (ADFS)\n\n* ** المصادقة من خلال متغير البيئة **\n\t * Kerberos (mod_auth_kerb)\n\t * أي مزود آخر يقوم بالمصادقة باستخدام متغير البيئة\n\nوبالرغم من أنه من الناحية النظرية يكون أي مزود مصادقة آخر يطبق أيًا من هذين المعيارين متوافق، إلا أنه تجدر الإشارة إلي أنهما ليسا جزءًا من أي مصفوفة اختبار داخلية.",
    "Open documentation" : "فتح الدليل",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account will not be possible anymore, unless you enabled \"%s\" or you go directly to the URL %s." : "تأكد من تكوين مستخدم إداري يمكنه الوصول إلى المثيل من خلال SSO. لن يكون تسجيل الدخول باستخدام الحساب العادي %sالخاص بك ممكنًا بعد الآن مالم تقم بتمكين \"%s\" أو الانتقال مباشرةً إلى عنوان URL %s.",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account will not be possible anymore, unless you go directly to the URL %s." : "تأكد من تكوين مستخدم إداري يمكنه الوصول إلى المثيل من خلال SSO. لن يكون تسجيل الدخول باستخدام الحساب العادي %sالخاص بك ممكنًا بعد الآن مالم تنتقل مباشرةً إلى عنوان URL %s.",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "يرجي اختيار ما إذا كنت تريد المصادقة باستخدام مزود SAML المدمج في نكست كلود أو ما إذا كنت تريد المصادقة باستخدام متغير الوسط.",
    "Use built-in SAML authentication" : "استخدام مصادقة  SAML المدمجة",
    "Use environment variable" : "استخدم متغير الوسط",
    "Global settings" : "الإعدادات العامة",
    "Remove identity provider" : "إزالة مزود الهوية",
    "Add identity provider" : "إضافة مزود الهوية",
    "General" : "العامة",
    "Service Provider Data" : "بيانات مزود الخدمة",
    "If your Service Provider should use certificates you can optionally specify them here." : "إذا كان يجب على مزود الخدمة الخاص بك استخدام الشهادات فيمكنك تحديدها اختياريًا هنا.",
    "Show Service Provider settings…" : "عرض إعدادات مزود الخدمة ...",
    "Name ID format" : "تنسيق معرف الاسم",
    "Identity Provider Data" : "مُزوِّد بيانات الهوية",
    "Identifier of the IdP entity (must be a URI)" : "معرّف كيان مزود الهوية (يجب أن يكون عنوان URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "يستهدف مزود الهوية \"IdP\" عنوان URL حيث يقوم مزود الخدمة بإرسال رسالة طلب المصادقة",
    "Show optional Identity Provider settings…" : "عرض الإعدادات الاختيارية لمزود الهوية ...",
    "URL Location of the IdP where the SP will send the SLO Request" : "عنوان محدد موقع الموارد المُوحّد لمزود الهوية حيث يرسل مزود الخدمة طلب تسجيل الخروج الفردي \"SLO\"",
    "URL Location of the IDP's SLO Response" : "موقع عنوان URL لاستجابة مزد الهوية \"IDP\" لتسجيل الخروج الفردي\"SLO \"",
    "Public X.509 certificate of the IdP" : "شهادة X.509 العامة لمزود الهوية \"IdP\" ",
    "Attribute mapping" : "تعيين السمة",
    "If you want to optionally map attributes to the user you can configure these here." : "إذا كنت تريد تعيين السمات اختياريًا للمستخدم ، فيمكنك تكوينها هنا.",
    "Show attribute mapping settings…" : "عرض إعدادات تعيين السمات ...",
    "Security settings" : "الإعدادات الأمنية",
    "For increased security we recommend enabling the following settings if supported by your environment." : "لمزيد من الأمان، نوصي بتمكين الإعدادات التالية إذا كان الوسط الخاص بك يدعمها.",
    "Show security settings…" : "إظهار إعدادات الأمان …",
    "Signatures and encryption offered" : "التوقيعات والتشفير المعروض",
    "Signatures and encryption required" : "مطلوب التوقيعات والتشفير",
    "User filtering" : "فلترة المستخدمين",
    "If you want to optionally restrict user login depending on user data, configure it here." : "إذا كنت ترغب في تقييد تسجيل دخول المستخدم اختياريًا اعتمادًا على بيانات المستخدم ، فقم بتهيئة ذلك هنا.",
    "Show user filtering settings …" : "عرض إعدادات فلترة المستخدمين ...",
    "Download metadata XML" : "تنزيل بيانات التعريف الوصفية بتسيق XML",
    "Reset settings" : "اعادة ضبط الإعدادات",
    "Metadata invalid" : "بيانات التعريف الوصفية غير صالحة",
    "Metadata valid" : "البيانات الوصفية/التعريفية صحيحة",
    "Error" : "خطأ",
    "Access denied." : "تم رفض الوصول.",
    "Your account is denied, access to this service is thus not possible." : "تم رفض حسابك، وبالتالي لا يمكن الوصول إلى هذه الخدمة.",
    "Account not provisioned." : "الحساب غير مزود بالخدمة.",
    "Your account is not provisioned, access to this service is thus not possible." : "حسابك غير مزود بالخدمة، وبالتالي لا يمكنك الوصول إلى هذه الخدمة.",
    "Login options:" : "خيارات تسجيل الدخول:",
    "Choose an authentication provider" : "إختَر مزوداً للتحقُّق من الهُوِيّة",
    "Group Mapping Prefix, default: SAML_" : "بادئة تعيين المجموعة Group Mapping Prefix، التلقائية: SAML_"
},
"nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;");
