// ===== NOVE STORE - MAIN APPLICATION =====

const APP = {
  ADMIN_EMAIL: 'cr8381062@gmail.com',
  STORE_NAME: 'Nove Store',
  STORE_LOGO: '',
  PAYPAL_CLIENT_ID: 'AdZijgGKQiP5hkM7nWSUQgVFH4dBS8K5SuClk9n9B1NP6KHUTe84pTcjVWBF7fIe8IZ-XXxhfJ0SegzO',
  SOCIAL_LINKS: {
    instagram: '',
    tiktok: '',
    discord: '',
    youtube: '',
    telegram: '',
    x: ''
  },
  GOOGLE_CLIENT_ID: '410210397515-shjon2a71788da9dlnkcssbetpncdgmp.apps.googleusercontent.com',
  googleInited: false,

  currentUser: null,
  products: [],
  cart: [],
  orders: [],
  categories: [],
  lang: 'ar',

  // ===== TRANSLATIONS =====
  TR: {
    ar: {
      store_slogan: 'Premium scripts for FiveM & Discord servers',
      nav_products: 'المنتجات',
      nav_features: 'المميزات',
      nav_about: 'من نحن',
      sign_in: 'تسجيل الدخول',
      sign_out: 'تسجيل الخروج',
      admin_panel: 'لوحة التحكم',
      store: 'المتجر',
      hero_badge: 'منتجات فايف ام وديسكورد الفاخرة',
      hero_title1: 'سكريبتات احترافية لسيرفرك',
      hero_title2: 'فايف ام وديسكورد',
      hero_desc: 'أدوات احترافية للمسؤولين، جودة مضمونة ودعم على مدار الساعة.',
      browse: 'تصفح المنتجات',
      learn_more: 'اعرف المزيد',
      happy_customers: 'عميل سعيد',
      premium_products: 'منتج مميز',
      support_247: 'دعم 24/7',
      orders_completed: 'طلب مكتمل',
      our_products: 'منتجاتنا',
      our_products_desc: 'سكريبتات وبوتات احترافية لسيرفراتك',
      all: 'الكل',
      in_cart: 'في السلة',
      add_to_cart: 'أضف للسلة',
      why_us: 'لماذا Nove Store؟',
      why_us_desc: 'نوفر الجودة والدعم والموثوقية',
      inst_delivery: 'توصيل فوري',
      inst_delivery_desc: 'احصل على منتجاتك فور الدفع بدون انتظار.',
      secure_payment: 'دفع آمن',
      secure_payment_desc: 'مدفوعات آمنة عبر باي بال والبيانات محمية.',
      updates: 'تحديثات دورية',
      updates_desc: 'جميع المنتجات تحصل على تحديثات وتحسينات مستمرة.',
      support247: 'دعم متواصل',
      support247_desc: 'فريق الدعم متواجد على مدار الساعة في الديسكورد.',
      easy_setup: 'إعداد سهل',
      easy_setup_desc: 'جميع المنتجات تأتي مع توثيق مفصل وتثبيت سهل.',
      quality_code: 'كود عالي الجودة',
      quality_code_desc: 'كود نظيف ومحسّن يمكنك الوثوق به.',
      about_title: 'عن Nove Store',
      about_desc: 'Nove Store سوق مميز لسكريبتات فايف ام وبوتات الديسكورد والأدوات. نتخصص في توفير منتجات عالية الجودة تساعدك في بناء وإدارة مجتمعاتك.',
      about_desc2: 'مهمتنا تقديم أدوات بمستوى احترافي بأسعار مناسبة ودعم استثنائي. كل منتج مُختبَر وموثّق ومعه تحديثات مجانية.',
      footer_rights: '© 2026 Nove Store. جميع الحقوق محفوظة.',
      your_cart: 'سلة المشتريات',
      cart_selected: 'المنتجات المختارة',
      cart_empty: 'سلتك فارغة',
      total: 'الإجمالي',
      pay_paypal: 'ادفع عبر باي بال',
      remove: 'حذف',
      signin_title: 'أهلاً بك في Nove Store',
      signin_desc: 'سجل دخولك لتتمكن من الشراء وإدارة طلباتك',
      terms_note: 'بموجب تسجيل الدخول فأنت توافق على شروط الخدمة وسياسة الخصوصية',
      tab_login: 'تسجيل الدخول',
      tab_register: 'إنشاء حساب',
      email_label: 'البريد الإلكتروني',
      password_label: 'كلمة المرور',
      name_label: 'الاسم الكامل',
      or_label: 'أو',
      fill_all_fields: 'الرجاء تعبئة جميع الحقول',
      password_short: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
      email_exists: 'هذا البريد مسجل مسبقاً',
      wrong_credentials: 'البريد أو كلمة المرور غير صحيحة',
      welcome_back: 'مرحباً بعودتك',
      welcome: 'مرحباً',
      added_cart: 'تمت الإضافة للسلة',
      already_cart: 'المنتج موجود بالفعل في السلة',
      order_confirmed: 'تم تأكيد الطلب!',
      order_success_desc: 'شكراً لشرائك. رقم طلبك:',
      order_success_extra1: 'سيتم إرسال تأكيد إلى بريدك الإلكتروني.',
      order_success_extra2: 'يمكنك تحميل منتجاتك من سيرفر الديسكورد.',
      back_to_store: 'العودة للمتجر',
      payment_failed: 'فشل الدفع. حاول مرة أخرى.',
      cart_empty_err: 'سلتك فارغة',
      please_signin: 'الرجاء تسجيل الدخول لإتمام الشراء',
      paypal_click: 'اضغط زر باي بال بالأعلى للدفع',
      order_confirmed_toast: 'طلبك المؤكد',
      fivem: 'فايف ام',
      discord: 'ديسكورد',
      usd: 'دولار',
      category: 'التصنيف',
      description: 'الوصف',
      features: 'المميزات',
      categories_manage: 'تصنيفات المنتجات',
      categories_sub: 'أضف وأنشئ تصنيفات لمنتجاتك',
      add_category: 'إضافة تصنيف',
      category_name: 'اسم التصنيف',
      category_icon: 'أيقونة التصنيف (إيموجي)',
      num_products: 'منتجات',
      no_categories: 'لا توجد تصنيفات بعد',
      add_cat_toast: 'تمت إضافة التصنيف!',
      updated_cat_toast: 'تم تحديث التصنيف!',
      deleted_cat_toast: 'تم حذف التصنيف',
      delete_cat_confirm: 'هل أنت متأكد من حذف هذا التصنيف؟ سيتم نقل منتجاته إلى تصنيف عام.',
      account_link: 'رابط الحساب / البرنامج',
      account_link_hint: 'ضع رابط تسليم البرنامج أو حسابك (فيسر، ديسكورد، رابط تحميل...)',
      account_link_ph: 'https://...',
      rec_account_link: 'رابط الحساب / البرنامج',
      delivery: 'التسليم',
      without_link: 'بدون رابط',
      builtin: 'مدمج',
      general: 'عام',
      // Admin
      admin_welcome: 'مرحباً بعودتك',
      group_overview: 'نظرة عامة',
      group_management: 'الإدارة',
      group_system: 'النظام',
      dashboard: 'لوحة التحكم',
      products_manage: 'المنتجات',
      orders_manage: 'الطلبات',
      users_manage: 'المستخدمون',
      settings_manage: 'الإعدادات',
      total_revenue: 'إجمالي الإيرادات',
      total_orders: 'إجمالي الطلبات',
      products_count: 'المنتجات',
      active_products: 'منتجات نشطة',
      revenue_week: 'الإيرادات هذا الأسبوع',
      view_all: 'عرض الكل',
      latest_orders: 'آخر الطلبات',
      recent_orders: 'طلبات حديثة',
      no_orders: 'لا توجد طلبات بعد',
      or: 'أو',
      sign_in_with: 'تسجيل الدخول بـ Google',
      google_error: 'خطأ في تسجيل الدخول عبر Google، حاول مرة أخرى',
      customer: 'العميل',
      products: 'المنتجات',
      status: 'الحالة',
      date: 'التاريخ',
      order: 'الطلب',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      joined: 'تاريخ الانضمام',
      role: 'الدور',
      owner: 'المالك',
      customer_role: 'زبون',
      active: 'نشط',
      inactive: 'غير نشط',
      pending: 'قيد الانتظار',
      completed: 'مكتمل',
      edit: 'تعديل',
      delete: 'حذف',
      add_product: 'إضافة منتج',
      edit_product: 'تعديل المنتج',
      add_new_product: 'إضافة منتج جديد',
      back: 'رجوع',
      save: 'حفظ',
      update: 'تحديث',
      product_name: 'اسم المنتج',
      price_usd: 'السعر (دولار)',
      product_desc: 'وصف المنتج',
      product_icon: 'الأيقونة (إيموجي)',
      one_per_line: 'ميزة في كل سطر',
      sales: 'المبيعات',
      actions: 'إجراءات',
      price: 'السعر',
      category_label: 'التصنيف',
      product_info: 'معلومات المنتج',
      new_product_details: 'تفاصيل منتج جديد',
      manage_products_sub: 'إدارة منتجات فايف ام والديسكورد',
      add_new_product: 'إضافة منتج جديد',
      back_to_products: 'رجوع للمنتجات',
      update_product_details: 'تحديث تفاصيل المنتج',
      create_new_listing: 'أنشئ قائمة منتج جديد',
      update_product: 'تحديث المنتج',
      delete_confirm: 'هل أنت متأكد من حذف هذا المنتج؟',
      no_sales_yet: 'لا مبيعات بعد',
      active_sales: 'مبيعات نشطة',
      new_signups: 'تسجيلات جديدة',
      total_users: 'إجمالي المستخدمين',
      admins: 'المشرفون',
      customers_label: 'الزبائن',
      registered_users: 'حسابات مسجلة في متجرك',
      store_config: 'إعدادات المتجر',
      store_name: 'اسم المتجر',
      owner_email: 'إيميل المالك (المشرف)',
      owner_email_hint: 'هذا الإيميل فقط لديه صلاحية المشرف.',
      paypal_integration: 'تكامل باي بال',
      paypal_client: 'مفتاح باي بال العام',
      paypal_hint: 'متوفر في لوحة مطوري باي بال. تصل المدفوعات إلى حسابك.',
      save_all: 'حفظ جميع الإعدادات',
      edit_product: 'تعديل المنتج',
      order_success_sub: 'تتبع مبيعاتك وسجل الطلبات',
      total_badge: 'إجمالي',
      guest: 'زائر',
      settings: 'الإعدادات',
      saved: 'تم الحفظ!',
      added_toast: 'تمت الإضافة!',
      updated_toast: 'تم التحديث!',
      deleted_toast: 'تم الحذف',
      access_denied: 'غير مصرح',
      access_denied_desc: 'ليس لديك صلاحية الدخول للوحة التحكم.',
      language_label: 'اللغة',
      // Roles & staff
      admin_staff: 'إدارة الأدمن',
      admin_staff_sub: 'أضف صلاحيات إدارية لفريقك',
      add_admin: 'إضافة أدمن',
      staff_role: 'الرتبة',
      role_owner: 'Owner',
      role_supervisor: 'Supervisor',
      role_admin: 'Admin',
      role_customer: 'زبون',
      admin_note: 'فقط المالك (Owner) يستطيع إدارة الأدمن.',
      no_staff: 'لا يوجد أعضاء إدارة بعد',
      remove_admin: 'إزالة الصلاحية',
      remove_admin_confirm: 'هل أنت متأكد من إزالة الصلاحية الإدارية من هذا المستخدم؟',
      staff_added: 'تمت إضافة عضو الإدارة!',
      staff_removed: 'تمت إزالة الصلاحية',
      owners_only: 'هذه الصلاحية للمالك فقط',
      group_people: 'الأشخاص',
      // Permissions / access
      perm_dashboard: 'لوحة التحكم والإحصائيات',
      perm_products: 'إضافة وتعديل المنتجات',
      perm_orders: 'عرض الطلبات',
      perm_users: 'إدارة المستخدمين',
      perm_roles: 'إدارة الرتب',
      perm_categories: 'إدارة التصنيفات',
      perm_settings: 'إعدادات المتجر',
      perm_paypal: 'تغيير إعدادات باي بال',
      // Permissions panel
      permissions_manage: 'نظام الصلاحيات',
      permissions_manage_sub: 'حدد صلاحيات كل رتبة (خاص بالمالك)',
      permissions_owner_only_desc: 'فقط المالك يستطيع التحكم في صلاحيات الرتب.',
      role_moderator: 'Moderator',
      role_admin: 'Admin',
      perm_coupons: 'إدارة كوبونات الخصم',
      no_perm_desc: 'لا تملك صلاحية الوصول لهذا القسم.',
      perms_saved: 'تم حفظ الصلاحيات!',
      color: 'اللون',
      icon: 'الأيقونة',
      add_new_role: 'إضافة رتبة جديدة',
      role_name: 'اسم الرتبة',
      role_name_ph: 'مثال: Supervisor',
      add_role: 'إضافة رتبة',
      role_added: 'تمت إضافة الرتبة!',
      role_fixed: 'لا يمكن تعديل أو حذف هذه الرتبة الأساسية',
      role_fixed_hint: 'رتبة أساسية (ثابتة)',
      delete_role_confirm: 'هل تريد حذف هذه الرتبة؟ سيتم تحويل أصحابها إلى User',
      role_name_required: 'أدخل اسم الرتبة أولاً',
      store_owner: 'صاحب المتجر',
      owner_panel_title: 'نظام الملكية (Owner)',
      owner_panel_desc: 'رتبة الملكية صلاحية مطلقة لا تُدار من هنا. المالك الثابت هو إيميلك',
      social_links: 'روابط التواصل الاجتماعي',
      social_links_hint: 'الصق رابط المنصة هنا، وستظهر أيقونته في أسفل الموقع تلقائياً.',
      change_avatar: 'تغيير الصورة الشخصية',
      avatar_uploaded: 'تم رفع الصورة بنجاح!',
      my_account: 'حسابي',
      tab_info: 'المعلومات',
      tab_password: 'كلمة المرور',
      tab_orders: 'طلباتي',
      full_name: 'الاسم الكامل',
      email_label: 'البريد الإلكتروني',
      save_changes: 'حفظ التغييرات',
      current_password: 'كلمة المرور الحالية',
      new_password: 'كلمة المرور الجديدة',
      confirm_password: 'تأكيد كلمة المرور',
      change_password: 'تغيير كلمة المرور',
      password_changed: 'تم تغيير كلمة المرور بنجاح!',
      wrong_password: 'كلمة المرور الحالية غير صحيحة!',
      password_short: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل!',
      no_orders: 'لا توجد طلبات بعد',
      password_mismatch: 'كلمتا المرور غير متطابقتين!',
      order_completed: 'مكتمل',
      order_pending: 'قيد الانتظار',
      // Logo
      store_logo: 'لوقو المتجر',
      upload_logo: 'رفع اللوقو',
      upload_logo_hint: 'اختر صورة من جهازك (PNG, JPG, SVG). سيتم حفظها تلقائياً.',
      remove_logo: 'إزالة اللوقو',
      logo_uploaded: 'تم رفع اللوقو!',
      // Product image
      product_image: 'صورة المنتج',
      product_image_hint: 'ارفع صورة للمنتج (PNG, JPG). اختياري.',
      remove_image: 'إزالة الصورة',
      image_too_large: 'الصورة كبيرة جداً (الحد الأقصى 2MB)',
      // Coupons
      coupons_manage: 'كوبونات الخصم',
      coupons_manage_sub: 'أنشئ وأدر أكواد الخصم',
      add_coupon: 'إضافة كود خصم',
      coupon_code: 'كود الخصم',
      coupon_discount: 'نسبة الخصم',
      coupon_type: 'النوع',
      coupon_value: 'قيمة الخصم',
      coupon_expiry: 'تاريخ الانتهاء',
      coupon_limit: 'حد الاستخدام',
      optional: 'اختياري',
      expiration: 'صلاحية',
      never: 'بدون انتهاء',
      expired: 'منتهي',
      no_coupons: 'لا يوجد كوبونات بعد',
      back_to_coupons: 'رجوع للكوبونات',
      new_coupon: 'كوبون جديد',
      discount: 'خصم',
      usage: 'الاستخدام',
      add_coupon_toast: 'تمت إضافة الكوبون!'
    },
    en: {
      store_slogan: 'Premium scripts for FiveM & Discord servers',
      nav_products: 'Products',
      nav_features: 'Features',
      nav_about: 'About',
      sign_in: 'Sign In',
      sign_out: 'Sign Out',
      admin_panel: 'Admin Panel',
      store: 'Store',
      hero_badge: 'Premium FiveM & Discord Products',
      hero_title1: 'Premium Scripts & Bots',
      hero_title2: 'For Your Server',
      hero_desc: 'Professional tools for serious server owners. Quality guaranteed, 24/7 support.',
      browse: 'Browse Products',
      learn_more: 'Learn More',
      happy_customers: 'Happy Customers',
      premium_products: 'Premium Products',
      support_247: '24/7 Support',
      orders_completed: 'Orders Completed',
      our_products: 'Our Products',
      our_products_desc: 'Professional scripts & bots for your servers',
      all: 'All',
      in_cart: 'In Cart',
      add_to_cart: 'Add to Cart',
      why_us: 'Why Nove Store?',
      why_us_desc: 'We deliver quality, support & reliability',
      inst_delivery: 'Instant Delivery',
      inst_delivery_desc: 'Get products instantly after payment. No waiting.',
      secure_payment: 'Secure Payment',
      secure_payment_desc: 'Safe payments via PayPal. Your data is protected.',
      updates: 'Regular Updates',
      updates_desc: 'All products receive regular updates & improvements.',
      support247: '24/7 Support',
      support247_desc: 'Our support team is available around the clock on Discord.',
      easy_setup: 'Easy Setup',
      easy_setup_desc: 'All products come with detailed docs & easy install.',
      quality_code: 'Quality Code',
      quality_code_desc: 'Clean, optimized, well-documented code you can trust.',
      about_title: 'About Nove Store',
      about_desc: 'Nove Store is a premium marketplace for FiveM scripts, Discord bots & gaming resources. We specialize in high-quality products for your gaming communities.',
      about_desc2: 'Our mission is professional-grade tools at fair prices with exceptional support. Every product is tested, documented & comes with free updates.',
      footer_rights: '© 2026 Nove Store. All rights reserved.',
      your_cart: 'Your Cart',
      cart_selected: 'Your selected products',
      cart_empty: 'Your cart is empty',
      total: 'Total',
      pay_paypal: 'Pay with PayPal',
      remove: 'Remove',
      signin_title: 'Welcome to Nove Store',
      signin_desc: 'Sign in to make purchases and manage your orders',
      terms_note: 'By signing in, you agree to our Terms of Service and Privacy Policy',
      tab_login: 'Login',
      tab_register: 'Register',
      email_label: 'Email',
      password_label: 'Password',
      name_label: 'Full Name',
      or_label: 'or',
      fill_all_fields: 'Please fill in all fields',
      password_short: 'Password must be at least 6 characters',
      email_exists: 'This email is already registered',
      wrong_credentials: 'Incorrect email or password',
      welcome_back: 'Welcome back',
      welcome: 'Welcome',
      added_cart: 'added to cart',
      already_cart: 'Product already in cart',
      order_confirmed: 'Order Confirmed!',
      order_success_desc: 'Thank you for your purchase. Your order ID:',
      order_success_extra1: 'A confirmation will be sent to your email.',
      order_success_extra2: 'You can download your products from the Discord server.',
      back_to_store: 'Back to Store',
      payment_failed: 'Payment failed. Please try again.',
      cart_empty_err: 'Your cart is empty',
      please_signin: 'Please sign in to complete purchase',
      paypal_click: 'Please click the PayPal button above to pay',
      order_confirmed_toast: 'Order confirmed',
      fivem: 'FiveM',
      discord: 'Discord',
      usd: 'USD',
      category: 'Category',
      description: 'Description',
      features: 'Features',
      categories_manage: 'Product Categories',
      categories_sub: 'Create and manage your product categories',
      add_category: 'Add Category',
      category_name: 'Category Name',
      category_icon: 'Category Icon (emoji)',
      num_products: 'Products',
      no_categories: 'No categories yet',
      add_cat_toast: 'Category added!',
      updated_cat_toast: 'Category updated!',
      deleted_cat_toast: 'Category deleted',
      delete_cat_confirm: 'Are you sure you want to delete this category? Its products will move to General.',
      account_link: 'Account / Program Link',
      account_link_hint: 'Put your delivery link or account (discord, download, fivem server...)',
      account_link_ph: 'https://...',
      rec_account_link: 'Account / Program Link',
      delivery: 'Delivery',
      without_link: 'No link',
      builtin: 'Built-in',
      general: 'General',
      // Admin
      admin_welcome: 'Welcome back',
      group_overview: 'Overview',
      group_management: 'Management',
      group_system: 'System',
      dashboard: 'Dashboard',
      products_manage: 'Products',
      orders_manage: 'Orders',
      users_manage: 'Users',
      settings_manage: 'Settings',
      total_revenue: 'Total Revenue',
      total_orders: 'Total Orders',
      products_count: 'Products',
      active_products: 'Active Products',
      revenue_week: 'Revenue This Week',
      view_all: 'View all',
      latest_orders: 'Latest Orders',
      recent_orders: 'Recent Orders',
      no_orders: 'No orders yet',
      or: 'or',
      sign_in_with: 'Sign in with Google',
      google_error: 'Google sign-in failed, please try again',
      customer: 'Customer',
      products: 'Products',
      status: 'Status',
      date: 'Date',
      order: 'Order',
      name: 'Name',
      email: 'Email',
      joined: 'Joined',
      role: 'Role',
      owner: 'Owner',
      customer_role: 'Customer',
      active: 'Active',
      inactive: 'Inactive',
      pending: 'Pending',
      completed: 'Completed',
      edit: 'Edit',
      delete: 'Delete',
      add_product: 'Add Product',
      edit_product: 'Edit Product',
      add_new_product: 'Add New Product',
      back: 'Back',
      save: 'Save',
      update: 'Update',
      product_name: 'Product Name',
      price_usd: 'Price (USD)',
      product_desc: 'Description',
      product_icon: 'Icon (emoji)',
      one_per_line: 'Features (one per line)',
      sales: 'Sales',
      actions: 'Actions',
      price: 'Price',
      category_label: 'Category',
      product_info: 'Product Information',
      new_product_details: 'New Product Details',
      manage_products_sub: 'Manage your FiveM & Discord products',
      add_new_product: 'Add New Product',
      back_to_products: 'Back to Products',
      update_product_details: 'Update product details',
      create_new_listing: 'Create a new product listing',
      update_product: 'Update Product',
      delete_confirm: 'Are you sure you want to delete this product?',
      no_sales_yet: 'No sales yet',
      active_sales: 'Active sales',
      new_signups: 'New sign-ups',
      total_users: 'Total Users',
      admins: 'Admins',
      customers_label: 'Customers',
      registered_users: 'Registered accounts on your store',
      store_config: 'Store Configuration',
      store_name: 'Store Name',
      owner_email: 'Owner Email (Admin)',
      owner_email_hint: 'Only this email has admin access.',
      paypal_integration: 'PayPal Integration',
      paypal_client: 'PayPal Client ID',
      paypal_hint: 'Found in PayPal Developer dashboard. Payments go to your account.',
      save_all: 'Save All Settings',
      edit_product: 'Edit Product',
      order_success_sub: 'Track your sales and order history',
      total_badge: 'total',
      guest: 'Guest',
      settings: 'Settings',
      saved: 'Settings saved!',
      added_toast: 'Added!',
      updated_toast: 'Updated!',
      deleted_toast: 'Deleted',
      access_denied: 'Access Denied',
      access_denied_desc: "You don't have permission to access the admin panel.",
      language_label: 'Language',
      // Roles & staff (English)
      admin_staff: 'Add Admin',
      admin_staff_sub: "Add admin permissions to your team",
      add_admin: 'Add Admin',
      staff_role: 'Role',
      role_owner: 'Owner',
      role_supervisor: 'Supervisor',
      role_admin: 'Admin',
      role_customer: 'Customer',
      admin_note: 'Only the Owner can manage admins.',
      no_staff: 'No admin members yet',
      remove_admin: 'Remove Permission',
      remove_admin_confirm: 'Are you sure you want to remove the admin permission from this user?',
      staff_added: 'Admin member added!',
      staff_removed: 'Permission removed',
      owners_only: 'This permission is reserved for the Owner',
      group_people: 'People',
      staff_email_hint: 'Only registered customer accounts can be promoted by their email.',
      // Logo (English)
      store_logo: 'Store Logo',
      upload_logo: 'Upload Logo',
      upload_logo_hint: 'Choose an image from your device (PNG, JPG, SVG). It will be saved automatically.',
      remove_logo: 'Remove Logo',
      logo_uploaded: 'Logo uploaded!',
      // Product image (English)
      product_image: 'Product Image',
      product_image_hint: 'Upload an image (PNG, JPG). Optional.',
      remove_image: 'Remove Image',
      image_too_large: 'Image is too large (max 2MB)',
      // Coupons (English)
      coupons_manage: 'Discount Coupons',
      coupons_manage_sub: 'Create and manage discount codes',
      add_coupon: 'Add Discount Code',
      coupon_code: 'Coupon Code',
      coupon_discount: 'Discount',
      coupon_type: 'Type',
      coupon_value: 'Discount Value',
      coupon_expiry: 'Expiry Date',
      coupon_limit: 'Usage Limit',
      optional: 'Optional',
      expiration: 'Expiration',
      never: 'Never',
      expired: 'Expired',
      no_coupons: 'No coupons yet',
      back_to_coupons: 'Back to Coupons',
      new_coupon: 'New Coupon',
      discount: 'Discount',
      usage: 'Usage',
      add_coupon_toast: 'Coupon added!',
      // Permissions (English)
      permissions_manage: 'Permission System',
      permissions_manage_sub: 'Set permissions for each role (Owner only)',
      permissions_owner_only_desc: 'Only the Owner can manage role permissions.',
      perm_products: 'Add/Edit Products',
      perm_orders: 'View Orders',
      perm_users: 'Manage Users',
      perm_roles: 'Manage Roles',
      perm_categories: 'Manage Categories',
      perm_settings: 'Store Settings',
      perm_paypal: 'Change PayPal Settings',
      perm_coupons: 'Manage Coupons',
      role_moderator: 'Moderator',
      role_admin: 'Admin',
      no_perm_desc: "You don't have permission to access this section.",
      perms_saved: 'Permissions saved!',
      color: 'Color',
      icon: 'Icon',
      add_new_role: 'Add a New Role',
      role_name: 'Role Name',
      role_name_ph: 'e.g. Supervisor',
      add_role: 'Add Role',
      role_added: 'Role added!',
      role_fixed: 'Cannot edit or delete this fixed role',
      role_fixed_hint: 'Fixed (core) role',
      delete_role_confirm: 'Delete this role? Its members will become Users.',
      role_name_required: 'Enter a role name first',
      store_owner: 'Store Owner',
      owner_panel_title: 'Ownership System (Owner)',
      owner_panel_desc: 'Owner is an absolute role not managed here. Your fixed owner email is',
      social_links: 'Social Media Links',
      social_links_hint: 'Paste a platform link here and its icon will appear at the bottom of the site automatically.',
      change_avatar: 'Change Profile Picture',
      avatar_uploaded: 'Profile picture updated!',
      my_account: 'My Account',
      tab_info: 'Info',
      tab_password: 'Password',
      tab_orders: 'My Orders',
      full_name: 'Full Name',
      email_label: 'Email',
      save_changes: 'Save Changes',
      current_password: 'Current Password',
      new_password: 'New Password',
      confirm_password: 'Confirm Password',
      change_password: 'Change Password',
      password_changed: 'Password changed successfully!',
      wrong_password: 'Current password is incorrect!',
      password_short: 'Password must be at least 6 characters!',
      no_orders: 'No orders yet',
      password_mismatch: 'Passwords do not match!',
      order_completed: 'Completed',
      order_pending: 'Pending',
    }
  },

  t(key) {
    return (this.TR[this.lang] && this.TR[this.lang][key]) || this.TR.en[key] || key;
  },

  setLang(lang) {
    this.lang = lang === 'en' ? 'en' : 'ar';
    localStorage.setItem('nove_lang', this.lang);
    document.documentElement.setAttribute('lang', this.lang);
    document.documentElement.setAttribute('dir', this.lang === 'ar' ? 'rtl' : 'ltr');
    document.body.classList.toggle('lang-en', this.lang === 'en');
    this.applyStaticTranslations();
    const isAdminPage = window.location.pathname.includes('admin.html');
    if (isAdminPage) {
      const activeNav = document.querySelector('.admin-nav-item.active');
      const section = activeNav ? (activeNav.getAttribute('data-section') || 'dashboard') : 'dashboard';
      this.showAdminSection(section);
    } else {
      this.renderCurrentPage();
      this.updateHeroStats();
      this.renderProducts();
    }
    const toggle = document.getElementById('lang-toggle');
    if (toggle) toggle.textContent = this.lang === 'ar' ? 'EN' : 'ع';
  },

  decideDirection() {
    const stored = localStorage.getItem('nove_lang') || 'ar';
    this.lang = stored === 'en' ? 'en' : 'ar';
  },

  applyStaticTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.setAttribute('placeholder', this.t(el.getAttribute('data-i18n-placeholder')));
    });
  },

  toggleLang() {
    this.setLang(this.lang === 'ar' ? 'en' : 'ar');
  },

  init() {
    this.decideDirection();
    this.loadSettings();
    this.loadData();
    this.checkAuth();
    this.renderCurrentPage();
    this.initNavbar();
    this.initScrollEffects();
    this.applyStaticTranslations();
    this.applyLogo();
    this.renderSocialIcons();
    this.updateHeroStats();
    this.createRainDrops();
  },

  updateHeroStats() {
    const customersEl = document.getElementById('stat-customers');
    const productsEl = document.getElementById('stat-products');
    const ordersEl = document.getElementById('stat-orders');
    const users = JSON.parse(localStorage.getItem('nove_users')) || [];
    if (customersEl) customersEl.textContent = users.length;
    if (productsEl) productsEl.textContent = this.products.filter(p => p.status === 'active').length || 9;
    if (ordersEl) ordersEl.textContent = this.orders.length;
  },

  createRainDrops() {
    if (document.querySelectorAll('.rain-drop').length > 0) return;
    for (let i = 0; i < 14; i++) {
      const drop = document.createElement('div');
      drop.className = 'rain-drop';
      drop.style.left = (Math.random() * 100) + '%';
      drop.style.animationDuration = (6 + Math.random() * 8) + 's';
      drop.style.animationDelay = (Math.random() * 10) + 's';
      drop.style.height = (30 + Math.random() * 70) + 'px';
      document.body.appendChild(drop);
    }
  },

  loadSettings() {
    const settings = JSON.parse(localStorage.getItem('nove_settings')) || {};
    if (settings.storeName) this.STORE_NAME = settings.storeName;
    if (settings.logo) this.STORE_LOGO = settings.logo;
    if (settings.paypal && settings.paypal !== 'YOUR_PAYPAL_CLIENT_ID') this.PAYPAL_CLIENT_ID = settings.paypal;
    if (settings.social) this.SOCIAL_LINKS = Object.assign({}, this.SOCIAL_LINKS, settings.social);
    localStorage.setItem('nove_settings', JSON.stringify(settings));
  },

  // ===== DATA =====
  loadData() {
    this.products = JSON.parse(localStorage.getItem('nove_products')) || this.getDefaultProducts();
    this.cart = JSON.parse(localStorage.getItem('nove_cart')) || [];
    this.orders = JSON.parse(localStorage.getItem('nove_orders')) || [];
    if (!localStorage.getItem('nove_products')) {
      this.saveProducts();
    }
  },

  saveProducts() {
    localStorage.setItem('nove_products', JSON.stringify(this.products));
  },

  saveCart() {
    localStorage.setItem('nove_cart', JSON.stringify(this.cart));
    this.updateCartBadge();
  },

  saveOrders() {
    localStorage.setItem('nove_orders', JSON.stringify(this.orders));
  },

  loadCategories() {
    this.categories = JSON.parse(localStorage.getItem('nove_categories')) || [];
    return this.categories;
  },

  saveCategories() {
    localStorage.setItem('nove_categories', JSON.stringify(this.categories));
    this.categories = this.categories || [];
  },

  getCategories() {
    return this.loadCategories();
  },

  resolveCategoryLabel(catKey) {
    if (catKey === 'fivem') return this.t('fivem');
    if (catKey === 'discord') return this.t('discord');
    if (catKey === 'general') return this.t('general');
    const c = this.categories.find(x => x.key === catKey);
    return c ? c.name : (catKey || this.t('general'));
  },

  getDefaultProducts() {
    return [
      {
        id: 1, name: 'qb-core Framework Script', category: 'fivem', icon: '',
        description: 'Complete QBCore framework script for FiveM with full features',
        price: 49.99, features: ['Full source code', 'Documentation', 'Free updates', 'Discord support'],
        status: 'active', sales: 156
      },
      {
        id: 2, name: 'Discord Verification Bot', category: 'discord', icon: '',
        description: 'Advanced verification bot for Discord servers with role management',
        price: 29.99, features: ['Auto verification', 'Role assignment', 'Anti-raid', 'Logs'],
        status: 'active', sales: 234
      },
      {
        id: 3, name: 'ESX Essentials Pack', category: 'fivem', icon: '',
        description: 'Essential scripts pack for ESX framework - jobs, inventory, and more',
        price: 79.99, features: ['20+ scripts', 'MySQL support', 'Multi-language', '24/7 support'],
        status: 'active', sales: 89
      },
      {
        id: 4, name: 'Discord Ticket System', category: 'discord', icon: '',
        description: 'Professional ticket system with categories and transcripts',
        price: 19.99, features: ['Category support', 'Transcripts', 'Auto-close', 'Staff roles'],
        status: 'active', sales: 312
      },
      {
        id: 5, name: 'FiveM Launcher UI', category: 'fivem', icon: '',
        description: 'Custom server launcher with modern dark UI design',
        price: 39.99, features: ['Custom themes', 'Server info', 'Rules page', 'Discord widget'],
        status: 'active', sales: 67
      },
      {
        id: 6, name: 'Discord Music Bot', category: 'discord', icon: '',
        description: 'Feature-rich music bot with playlist support and effects',
        price: 24.99, features: ['Multi-platform', 'Queue system', 'Effects', '24/7 mode'],
        status: 'active', sales: 178
      },
      {
        id: 7, name: 'vMenu Custom Config', category: 'fivem', icon: '',
        description: 'Pre-configured vMenu with custom options and permissions',
        price: 14.99, features: ['30+ vehicles', 'Custom perms', 'Admin tools', 'Easy setup'],
        status: 'active', sales: 201
      },
      {
        id: 8, name: 'Discord Giveaway Bot', category: 'discord', icon: '',
        description: 'Automated giveaway system with entry requirements',
        price: 12.99, features: ['Requirements', 'Auto-pick', 'Reroll', 'Embeds'],
        status: 'active', sales: 145
      },
      {
        id: 9, name: 'Housing Script v2', category: 'fivem', icon: '',
        description: 'Advanced housing system with interiors and furniture',
        price: 59.99, features: ['50+ interiors', 'Furniture system', 'Keys', 'Renting'],
        status: 'active', sales: 92
      }
    ];
  },

  // ===== AUTH =====
  checkAuth() {
    const userData = localStorage.getItem('nove_user');
    if (userData) {
      this.currentUser = JSON.parse(userData);
    }
  },

  registerUser(user) {
    const users = JSON.parse(localStorage.getItem('nove_users')) || [];
    const existing = users.find(u => u.email === user.email);
    if (!existing) {
      user.joinedAt = new Date().toISOString();
      users.push(user);
      localStorage.setItem('nove_users', JSON.stringify(users));
    }
  },

  showAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`.auth-tab[data-tab="${tab}"]`).classList.add('active');
    document.getElementById('auth-login-form').style.display = tab === 'login' ? 'block' : 'none';
    document.getElementById('auth-register-form').style.display = tab === 'register' ? 'block' : 'none';
  },

  async hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + 'nove_store_salt');
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
  },

  async registerWithEmail(e) {
    e.preventDefault();
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim().toLowerCase();
    const password = document.getElementById('reg-password').value;

    if (!name || !email || !password) {
      this.showToast(this.t('fill_all_fields'), 'error');
      return;
    }
    if (password.length < 6) {
      this.showToast(this.t('password_short'), 'error');
      return;
    }

    const users = JSON.parse(localStorage.getItem('nove_users')) || [];
    if (users.find(u => u.email === email)) {
      this.showToast(this.t('email_exists'), 'error');
      return;
    }

    const hashed = await this.hashPassword(password);
    const user = {
      id: 'email_' + Date.now(),
      name: name,
      email: email,
      password: hashed,
      avatar: '',
      isAdmin: email === this.ADMIN_EMAIL,
      joinedAt: new Date().toISOString()
    };

    users.push(user);
    localStorage.setItem('nove_users', JSON.stringify(users));

    this.currentUser = { ...user };
    delete this.currentUser.password;
    localStorage.setItem('nove_user', JSON.stringify(this.currentUser));
    this.updateAuthUI();
    this.closeModal('auth-modal');
    this.showToast(this.t('welcome') + ', ' + name + '!', 'success');
  },

  initGoogleSignIn() {
    if (!window.google || !google.accounts || this.googleInited) return;
    google.accounts.id.initialize({
      client_id: APP.GOOGLE_CLIENT_ID,
      callback: window.handleGoogleLogin,
      auto_select: false,
      cancel_on_tap_outside: true
    });
    this.googleInited = true;
  },

  renderGoogleButton() {
    const btn = document.getElementById('google-signin-btn');
    if (!btn) return;
    if (!window.google || !google.accounts) return;
    this.initGoogleSignIn();
    btn.innerHTML = '';
    google.accounts.id.renderButton(btn, {
      type: 'standard',
      shape: 'rectangular',
      theme: 'outline',
      text: 'signin_with',
      size: 'large',
      width: 280,
      locale: this.lang === 'ar' ? 'ar' : 'en'
    });
  },

  openAuthModal() {
    document.getElementById('auth-modal').classList.add('active');
    this.renderGoogleButton();
  },

  handleGoogleLogin(response) {
    try {
      const payload = JSON.parse(atob(response.credential));
      const email = payload.email;
      const name = payload.name || email.split('@')[0];
      const picture = payload.picture || '';
      const list = JSON.parse(localStorage.getItem('nove_users')) || [];
      let user = list.find(u => u.email === email);
      if (!user) {
        user = {
          id: 'google_' + Date.now(),
          name: name,
          email: email,
          password: '',
          avatar: picture,
          isAdmin: email === APP.ADMIN_EMAIL,
          joinedAt: new Date().toISOString()
        };
        list.push(user);
        localStorage.setItem('nove_users', JSON.stringify(list));
      } else if (picture && !user.avatar) {
        user.avatar = picture;
        localStorage.setItem('nove_users', JSON.stringify(list));
      }
      APP.currentUser = { ...user };
      delete APP.currentUser.password;
      localStorage.setItem('nove_user', JSON.stringify(APP.currentUser));
      APP.updateAuthUI();
      APP.closeModal('auth-modal');
      APP.showToast(APP.t('welcome') + ', ' + name + '!', 'success');
    } catch (err) {
      console.error('Google login error:', err);
      APP.showToast(APP.t('google_error'), 'error');
    }
  },

  async loginWithEmail(e) {
    e.preventDefault();
    const email = document.getElementById('auth-email').value.trim().toLowerCase();
    const password = document.getElementById('auth-password').value;

    if (!email || !password) {
      this.showToast(this.t('fill_all_fields'), 'error');
      return;
    }

    const users = JSON.parse(localStorage.getItem('nove_users')) || [];
    const hashed = await this.hashPassword(password);
    const user = users.find(u => u.email === email && u.password === hashed);

    if (!user) {
      this.showToast(this.t('wrong_credentials'), 'error');
      return;
    }

    this.currentUser = { ...user };
    delete this.currentUser.password;
    localStorage.setItem('nove_user', JSON.stringify(this.currentUser));
    this.updateAuthUI();
    this.closeModal('auth-modal');
    this.showToast(this.t('welcome') + ', ' + user.name + '!', 'success');
  },

  logout() {
    this.currentUser = null;
    localStorage.removeItem('nove_user');
    this.updateAuthUI();
    const isAdminPage = window.location.pathname.includes('admin.html');
    window.location.href = isAdminPage ? '../index.html' : 'index.html';
  },

  isAdmin() {
    if (this.currentUser && this.currentUser.email === this.ADMIN_EMAIL) return true;
    if (!this.currentUser) return false;
    const role = this.getUserRole(this.currentUser.email);
    if (role === 'owner') return true;
    const r = this.loadRoles()[role];
    if (!r) return false;
    return Object.values(r.perms).some(Boolean);
  },

  updateAuthUI() {
    const authBtns = document.getElementById('auth-buttons');
    const userMenu = document.getElementById('user-menu');
    if (!authBtns || !userMenu) return;

    if (this.currentUser) {
      authBtns.style.display = 'none';
      userMenu.classList.add('active');
      const img = userMenu.querySelector('.user-avatar');
      if (img) {
        img.src = this.currentUser.avatar || this.generateAvatar(this.currentUser.name);
      }
      const dd = userMenu.querySelector('.user-dropdown');
      if (dd) {
        dd.querySelector('.user-name').textContent = this.currentUser.name;
        dd.querySelector('.user-email').textContent = this.currentUser.email;
        const role = this.getUserRole(this.currentUser.email);
        const roleDef = this.loadRoles()[role];
        const roleEl = dd.querySelector('#user-role');
        if (roleEl) {
          const rc = roleDef ? roleDef.color : '#22d3ee';
          roleEl.textContent = this.roleLabel(role);
          roleEl.setAttribute('data-role', role);
          roleEl.style.display = 'inline-flex';
          roleEl.style.background = roleDef ? 'rgba(139,92,246,0.16)' : 'rgba(34,211,238,0.14)';
          roleEl.style.color = rc;
          roleEl.style.borderColor = rc + '66';
        }
        const adminLink = dd.querySelector('.admin-link');
        if (adminLink) {
          adminLink.style.display = this.isAdmin() ? 'flex' : 'none';
        }
      }
    } else {
      authBtns.style.display = 'flex';
      userMenu.classList.remove('active');
    }
  },

  getUserRole(email) {
    if (email === this.ADMIN_EMAIL) return 'owner';
    const list = JSON.parse(localStorage.getItem('nove_users')) || [];
    const u = list.find(e => e.email === email);
    if (!u) return 'user';
    const r = this.loadRoles()[u.role];
    return (r && u.role !== 'user') ? u.role : 'user';
  },

  roleLabel(role) {
    const r = this.loadRoles()[role];
    if (r) return (r.icon || '') + ' ' + r.name;
    return '\u{1F464} User';
  },

  generateAvatar(name) {
    const canvas = document.createElement('canvas');
    canvas.width = 40;
    canvas.height = 40;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#7c3aed';
    ctx.fillRect(0, 0, 40, 40);
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 18px Inter';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(name.charAt(0).toUpperCase(), 20, 20);
    return canvas.toDataURL();
  },

  uploadAvatar(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      this.showToast(this.t('image_too_large'), 'error');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target.result;
      this.currentUser.avatar = dataUrl;
      localStorage.setItem('nove_user', JSON.stringify(this.currentUser));
      const list = JSON.parse(localStorage.getItem('nove_users')) || [];
      const user = list.find(u => u.email === this.currentUser.email);
      if (user) {
        user.avatar = dataUrl;
        localStorage.setItem('nove_users', JSON.stringify(list));
      }
      this.updateAuthUI();
      this.showToast(this.t('avatar_uploaded'), 'success');
    };
    reader.readAsDataURL(file);
  },

  showProfilePanel() {
    if (!this.currentUser) return;
    document.querySelector('.user-dropdown').classList.remove('active');
    const c = document.getElementById('profile-content');
    if (!c) return;
    const u = this.currentUser;
    const avatar = u.avatar || this.generateAvatar(u.name);
    const orders = (this.orders || []).filter(o => o.email === u.email);
    const ordersHTML = orders.length === 0
      ? `<div class="empty-orders"><h4>&#128230;</h4><p data-i18n="no_orders">${this.t('no_orders')}</p></div>`
      : orders.map(o => {
          const date = new Date(o.date).toLocaleDateString(this.lang === 'ar' ? 'ar-SA' : 'en-US');
          const items = (o.items || []).map(i => i.name || i.id).join(', ');
          return `
            <div class="order-card">
              <div class="order-card-header">
                <h4>${o.id}</h4>
                <span class="order-status ${o.status}">${this.t('order_' + o.status) || o.status}</span>
              </div>
              <div class="order-items">${items}</div>
              <div class="order-card-footer">
                <span>${date}</span>
                <span class="order-total">$${(o.total || 0).toFixed(2)}</span>
              </div>
            </div>`;
        }).join('');
    c.innerHTML = `
      <div class="profile-header">
        <label class="profile-avatar-wrap" style="cursor:pointer;" title="${this.t('change_avatar')}">
          <img src="${avatar}" alt="${u.name}">
          <input type="file" accept="image/*" onchange="APP.uploadAvatar(event)" style="display:none;">
          <div style="position:absolute; inset:0; background:rgba(0,0,0,0.5); display:flex; align-items:center; justify-content:center; opacity:0; transition:opacity 0.3s; font-size:0.7rem; color:#fff; border-radius:50%; pointer-events:none;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0">&#128247;</div>
        </label>
        <h3>${u.name}</h3>
        <p>${u.email}</p>
      </div>
      <div class="profile-tabs">
        <button class="profile-tab active" onclick="APP.switchProfileTab('info')" data-i18n="tab_info">${this.t('tab_info')}</button>
        <button class="profile-tab" onclick="APP.switchProfileTab('password')" data-i18n="tab_password">${this.t('tab_password')}</button>
        <button class="profile-tab" onclick="APP.switchProfileTab('orders')" data-i18n="tab_orders">${this.t('tab_orders')}</button>
      </div>
      <div class="profile-section active" id="ps-info">
        <form class="profile-form" onsubmit="APP.saveProfileName(); return false;">
          <div class="form-group">
            <label>${this.t('full_name')}</label>
            <input type="text" id="profile-name" value="${u.name}" required>
          </div>
          <div class="form-group">
            <label>${this.t('email_label')}</label>
            <input type="email" value="${u.email}" disabled style="opacity:0.5;">
          </div>
          <button type="submit" class="profile-btn">${this.t('save_changes')}</button>
        </form>
      </div>
      <div class="profile-section" id="ps-password">
        <form class="profile-form" onsubmit="APP.changePassword(); return false;">
          <div class="form-group">
            <label>${this.t('current_password')}</label>
            <input type="password" id="profile-cur-pass" required>
          </div>
          <div class="form-group">
            <label>${this.t('new_password')}</label>
            <input type="password" id="profile-new-pass" required minlength="6">
          </div>
          <div class="form-group">
            <label>${this.t('confirm_password')}</label>
            <input type="password" id="profile-confirm-pass" required>
          </div>
          <button type="submit" class="profile-btn">${this.t('change_password')}</button>
        </form>
      </div>
      <div class="profile-section" id="ps-orders">
        ${ordersHTML}
      </div>
    `;
    document.getElementById('profile-modal').classList.add('active');
  },

  switchProfileTab(tab) {
    document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.profile-section').forEach(s => s.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('ps-' + tab).classList.add('active');
  },

  async saveProfileName() {
    const newName = (document.getElementById('profile-name').value || '').trim();
    if (!newName) { this.showToast(this.t('role_name_required'), 'error'); return; }
    const list = JSON.parse(localStorage.getItem('nove_users')) || [];
    const user = list.find(u => u.email === this.currentUser.email);
    if (user) { user.name = newName; localStorage.setItem('nove_users', JSON.stringify(list)); }
    this.currentUser.name = newName;
    localStorage.setItem('nove_user', JSON.stringify(this.currentUser));
    this.updateAuthUI();
    this.showToast(this.t('saved_toast'), 'success');
  },

  async changePassword() {
    const cur = document.getElementById('profile-cur-pass').value;
    const nw = document.getElementById('profile-new-pass').value;
    const conf = document.getElementById('profile-confirm-pass').value;
    if (nw !== conf) { this.showToast(this.t('password_mismatch'), 'error'); return; }
    if (nw.length < 6) { this.showToast(this.t('password_short'), 'error'); return; }
    const list = JSON.parse(localStorage.getItem('nove_users')) || [];
    const user = list.find(u => u.email === this.currentUser.email);
    if (!user) return;
    const curHash = await this.hashPassword(cur);
    if (user.password !== curHash) { this.showToast(this.t('wrong_password'), 'error'); return; }
    user.password = await this.hashPassword(nw);
    localStorage.setItem('nove_users', JSON.stringify(list));
    this.showToast(this.t('password_changed'), 'success');
    document.getElementById('profile-cur-pass').value = '';
    document.getElementById('profile-new-pass').value = '';
    document.getElementById('profile-confirm-pass').value = '';
  },

  toggleUserDropdown() {
    const dd = document.querySelector('.user-dropdown');
    dd.classList.toggle('active');
  },

  // ===== CART =====
  addToCart(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;
    if (this.cart.find(c => c.id === productId)) {
      this.showToast(this.t('already_cart'), 'error');
      return;
    }
    this.cart.push(product);
    this.saveCart();
    this.showToast(product.name + ' ' + this.t('added_cart'), 'success');
    this.updateAddToCartButtons();
  },

  removeFromCart(productId) {
    this.cart = this.cart.filter(c => c.id !== productId);
    this.saveCart();
    this.renderCart();
    this.updateAddToCartButtons();
  },

  getCartTotal() {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  },

  updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (!badge) return;
    badge.textContent = this.cart.length;
    badge.classList.toggle('hidden', this.cart.length === 0);
  },

  updateAddToCartButtons() {
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
      const id = parseInt(btn.dataset.id);
      if (this.cart.find(c => c.id === id)) {
        btn.textContent = this.t('in_cart');
        btn.classList.add('added');
      } else {
        btn.textContent = this.t('add_to_cart');
        btn.classList.remove('added');
      }
    });
  },

  // ===== RENDER =====
  renderCurrentPage() {
    this.updateAuthUI();
    this.updateCartBadge();
    const page = this.getPage();
    const successContent = document.getElementById('success-content');
    if (page === 'success' && successContent) {
      successContent.style.display = 'flex';
      this.renderSuccessPage();
    } else if (successContent) {
      successContent.style.display = 'none';
    }
    if (page === 'admin') this.renderAdminPage();
  },

  getPage() {
    const params = new URLSearchParams(window.location.search);
    return params.get('page') || 'home';
  },

  renderProducts(filter = 'all') {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    this.syncStoreFilters();
    let filtered = this.products.filter(p => p.status === 'active');
    if (filter !== 'all') filtered = filtered.filter(p => p.category === filter);
    grid.innerHTML = filtered.map(p => `
      <div class="product-card" onclick="APP.showProduct(${p.id})">
        <div class="product-image">
          <span class="product-tag">${this.resolveCategoryLabel(p.category)}</span>
          ${p.image ? `<img src="${p.image}" alt="${p.name}" style="width:100%; height:100%; object-fit:cover;">` : p.icon}
        </div>
        <div class="product-info">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <div class="product-footer">
            <div class="product-price">$${p.price} <span>${this.t('usd')}</span></div>
            <button class="btn-add-cart" data-id="${p.id}" onclick="event.stopPropagation(); APP.addToCart(${p.id})">
              ${this.cart.find(c => c.id === p.id) ? this.t('in_cart') : this.t('add_to_cart')}
            </button>
          </div>
        </div>
      </div>
    `).join('');
    this.updateAddToCartButtons();
  },

  filterProducts(category) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    this.renderProducts(category);
  },

  syncStoreFilters() {
    const wrap = document.querySelector('.category-filters');
    if (!wrap) return;
    const staticKeys = ['all', 'fivem', 'discord'];
    wrap.querySelectorAll('.filter-btn').forEach(b => {
      const f = b.getAttribute('data-filter');
      if (f && !staticKeys.includes(f)) b.remove();
    });
    this.getCategories().forEach(c => {
      const existing = wrap.querySelector(`.filter-btn[data-filter="${c.key}"]`);
      if (!existing) {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.setAttribute('data-filter', c.key);
        btn.textContent = c.name;
        btn.onclick = () => APP.filterProductsByKey(c.key, btn);
        wrap.appendChild(btn);
      }
    });
  },

  filterProductsByKey(key, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    this.renderProducts(key);
  },

  showProduct(id) {
    const product = this.products.find(p => p.id === id);
    if (!product) return;
    const overlay = document.getElementById('product-modal');
    const body = overlay.querySelector('.modal-body');
    body.innerHTML = `
      <div class="product-detail">
        <div class="product-detail-image">${product.image ? `<img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;">` : product.icon}</div>
        <div class="product-detail-body">
          <button class="modal-close" onclick="APP.closeModal('product-modal')">&times;</button>
          <div class="category">${this.resolveCategoryLabel(product.category)}</div>
          <h2>${product.name}</h2>
          <p class="description">${product.description}</p>
          <div class="product-detail-price">$${product.price}</div>
          <ul class="product-detail-features">
            ${(product.features || []).map(f => `<li>${f}</li>`).join('')}
          </ul>
          <button class="btn-primary" style="width:100%" onclick="APP.addToCart(${product.id}); APP.closeModal('product-modal');">
            ${this.cart.find(c => c.id === product.id) ? this.t('in_cart') : this.t('add_to_cart')}
          </button>
        </div>
      </div>
    `;
    overlay.classList.add('active');
  },

  closeModal(id) {
    document.getElementById(id).classList.remove('active');
  },

  renderCart() {
    const container = document.getElementById('cart-modal');
    if (!container) return;
    const body = container.querySelector('.modal-body');
    let html = `<h2>${this.t('your_cart')}</h2><p>${this.t('cart_selected')}</p>`;

    if (this.cart.length === 0) {
      html += `
        <div class="cart-empty">
          <div class="cart-empty-icon">\ud83d\uded2</div>
          <p>${this.t('cart_empty')}</p>
        </div>
      `;
    } else {
      html += '<div class="cart-items">';
      this.cart.forEach(item => {
        html += `
          <div class="cart-item">
            <div class="cart-item-icon">${item.icon}</div>
            <div class="cart-item-details">
              <h4>${item.name}</h4>
              <p>${this.resolveCategoryLabel(item.category)}</p>
            </div>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            <button class="cart-item-remove" onclick="APP.removeFromCart(${item.id})">\u2715</button>
          </div>
        `;
      });
      html += '</div>';
      html += `
        <div class="cart-summary">
          <div class="cart-total">
            <span>${this.t('total')}</span>
            <strong>$${this.getCartTotal().toFixed(2)}</strong>
          </div>
          <div id="paypal-button-container"></div>
          <button class="btn-primary" style="width:100%; margin-top:0.8rem;" onclick="APP.checkoutPayPal()">
            ${this.t('pay_paypal')} - $${this.getCartTotal().toFixed(2)}
          </button>
        </div>
      `;
    }
    body.innerHTML = html;
    this.initPayPal();
  },

  openCart() {
    this.renderCart();
    document.getElementById('cart-modal').classList.add('active');
  },

  // ===== PAYPAL =====
  initPayPal() {
    const container = document.getElementById('paypal-button-container');
    if (!container) return;
    if (window.paypal) {
      this.renderPayPalButtons();
    } else if (this.PAYPAL_CLIENT_ID && this.PAYPAL_CLIENT_ID !== 'YOUR_PAYPAL_CLIENT_ID') {
      this.loadPayPalSDK();
    }
  },

  loadPayPalSDK() {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=' + this.PAYPAL_CLIENT_ID;
    script.onload = () => this.renderPayPalButtons();
    script.onerror = () => this.showToast('Unable to load PayPal', 'error');
    document.body.appendChild(script);
  },

  renderPayPalButtons() {
    const container = document.getElementById('paypal-button-container');
    if (!container || !window.paypal) return;
    container.innerHTML = '';
    paypal.Buttons({
      style: { layout: 'vertical', color: 'black', shape: 'rect', label: 'paypal' },
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: { value: this.getCartTotal().toFixed(2) },
            description: 'Nove Store Purchase'
          }]
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        this.completeOrder(order);
      },
      onError: (err) => {
        this.showToast('Payment failed. Please try again.', 'error');
        console.error(err);
      }
    }).render('#paypal-button-container');
  },

  checkoutPayPal() {
    if (this.cart.length === 0) {
      this.showToast(this.t('cart_empty_err'), 'error');
      return;
    }
    if (!this.currentUser) {
      this.showToast(this.t('please_signin'), 'error');
      this.closeModal('cart-modal');
      this.openAuthModal();
      return;
    }
    // If PayPal SDK loaded, buttons will handle it. Otherwise redirect.
    if (window.paypal) {
      this.showToast(this.t('paypal_click'), 'success');
    } else {
      this.simulatePayment();
    }
  },

  simulatePayment() {
    // For demo/testing when PayPal isn't configured
    const order = {
      id: 'ORD-' + Date.now(),
      items: [...this.cart],
      total: this.getCartTotal(),
      email: this.currentUser ? this.currentUser.email : 'guest@example.com',
      status: 'completed',
      date: new Date().toISOString(),
      paymentId: 'SIM-' + Math.random().toString(36).substr(2, 9)
    };
    this.completeOrder({ id: order.paymentId });
  },

  completeOrder(paypalOrder) {
    const order = {
      id: 'ORD-' + Date.now(),
      items: [...this.cart],
      total: this.getCartTotal(),
      email: this.currentUser ? this.currentUser.email : 'guest@example.com',
      userName: this.currentUser ? this.currentUser.name : 'Guest',
      status: 'completed',
      date: new Date().toISOString(),
      paymentId: paypalOrder.id
    };
    this.orders.push(order);
    this.saveOrders();
    this.cart = [];
    this.saveCart();
    this.closeModal('cart-modal');
    window.location.href = '?page=success&order=' + order.id;
  },

  renderSuccessPage() {
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get('order');
    const container = document.getElementById('success-content');
    if (!container) return;
    container.innerHTML = `
      <div class="success-icon">\u2713</div>
      <h1>${this.t('order_confirmed')}</h1>
      <p>${this.t('order_success_desc')} <strong>${orderId}</strong></p>
      <p style="color: var(--gray-500); margin-bottom: 2rem;">
        ${this.t('order_success_extra1')}<br>${this.t('order_success_extra2')}
      </p>
      <a href="index.html" class="btn-primary">${this.t('back_to_store')}</a>
    `;
  },

  // ===== ADMIN =====
  renderAdminPage() {
    if (!this.isAdmin()) {
      document.getElementById('admin-content') ?
        document.getElementById('admin-content').innerHTML = `
          <div class="access-denied">
            <div>
              <h1>\ud83d\udeab</h1>
              <h1>${this.t('access_denied')}</h1>
              <p>${this.t('access_denied_desc')}</p>
              <a href="index.html" class="btn-primary">${this.t('back_to_store')}</a>
            </div>
          </div>
        ` : null;
      return;
    }
    this.renderAdminDashboard();
  },

  renderAdminDashboard() {
    const content = document.getElementById('admin-content');
    if (!content) return;
    const totalSales = this.orders.reduce((sum, o) => sum + o.total, 0);
    const lastOrders = this.orders.slice(-5).reverse();

    const totalsByDay = {};
    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    this.orders.forEach(o => {
      const d = new Date(o.date).getDay();
      totalsByDay[d] = (totalsByDay[d] || 0) + o.total;
    });
    const chartBars = days.map((d, i) => {
      const val = totalsByDay[i] || 0;
      const max = Math.max(...Object.values(totalsByDay), 1);
      const h = Math.max(8, (val / max) * 100);
      return `<div class="bar-col" title="$${val.toFixed(2)}">
        <div class="bar" style="height:${h}%"></div>
        <div class="bar-label">${d}</div>
      </div>`;
    }).join('');

    content.innerHTML = `
      <div class="admin-topbar">
        <div>
          <h1>
            <span class="tb-icon">\u2705</span>
            ${this.t('admin_welcome')}, ${APP.currentUser.name.split(' ')[0]}!
            <div class="tb-sub">${this.t('store_slogan')}</div>
          </h1>
        </div>
        <div class="admin-topbar-actions">
          <button class="btn-admin btn-admin-ghost" onclick="APP.showAdminSection('orders')">\u{1F4B3} ${this.t('orders_manage')}</button>
          <button class="btn-admin btn-admin-primary" onclick="APP.showAdminSection('products')">+ ${this.t('add_product')}</button>
        </div>
      </div>

      <div class="admin-stats">
        <div class="admin-stat-card">
          <div class="stat-header">
            <div class="stat-icon">\u{1F4B0}</div>
            <h4>${this.t('total_revenue')}</h4>
          </div>
          <div class="value">$${totalSales.toFixed(2)}</div>
          <div class="change">\u2191 100% ${this.t('total_orders')}</div>
        </div>
        <div class="admin-stat-card">
          <div class="stat-header">
            <div class="stat-icon">\u{1F4E6}</div>
            <h4>${this.t('total_orders')}</h4>
          </div>
          <div class="value">${this.orders.length}</div>
          <div class="change">\u2191 ${this.orders.length ? this.t('active_sales') : this.t('no_sales_yet')}</div>
        </div>
        <div class="admin-stat-card">
          <div class="stat-header">
            <div class="stat-icon">\u{1F4E5}</div>
            <h4>${this.t('products_count')}</h4>
          </div>
          <div class="value">${this.products.length}</div>
          <div class="change">${this.products.filter(p => p.status === 'active').length} ${this.t('active_products')}</div>
        </div>
        <div class="admin-stat-card">
          <div class="stat-header">
            <div class="stat-icon">\u{1F465}</div>
            <h4>${this.t('users_manage')}</h4>
          </div>
          <div class="value">${(JSON.parse(localStorage.getItem('nove_users')) || []).length}</div>
          <div class="change">\u2191 ${this.t('new_signups')}</div>
        </div>
      </div>

      <div class="admin-grid-2">
        <div class="admin-panel-card">
          <div class="pc-header">
            <h3>${this.t('revenue_week')}</h3>
            <span class="pc-link" onclick="APP.showAdminSection('orders')">${this.t('view_all')} \u2190</span>
          </div>
          <div class="pc-body">
            <div class="bar-chart">${chartBars}</div>
          </div>
        </div>
        <div class="admin-panel-card">
          <div class="pc-header">
            <h3>${this.t('latest_orders')}</h3>
            <span class="pc-link" onclick="APP.showAdminSection('orders')">${this.t('view_all')} \u2190</span>
          </div>
          <div class="pc-body">
            <div class="activity-list">
              ${this.orders.length === 0 ?
                `<p style="color:var(--gray-500); font-size:0.85rem; text-align:center; padding:1.5rem;">${this.t('no_orders')}</p>` :
                lastOrders.map(o => `
                  <div class="activity-item">
                    <div class="a-icon">\u{1F4E6}</div>
                    <div class="a-text">
                      <div class="a-title">${o.userName || this.t('guest')} - ${o.items.map(i => i.name).slice(0,2).join(', ')}</div>
                      <div class="a-sub">${o.id} \u00b7 ${new Date(o.date).toLocaleString()}</div>
                    </div>
                    <div class="a-amount green">$${o.total.toFixed(2)}</div>
                  </div>
                `).join('')}
            </div>
          </div>
        </div>
      </div>

      <div class="admin-panel-card">
        <div class="pc-header">
          <h3>${this.t('recent_orders')}</h3>
          <span class="pc-link" onclick="APP.showAdminSection('orders')">${this.t('view_all')} \u2190</span>
        </div>
        <div class="pc-body" style="padding:0;">
          <div class="admin-table" style="border:none; border-radius:0;">
            <table>
              <thead>
                <tr><th>${this.t('order')}</th><th>${this.t('customer')}</th><th>${this.t('products')}</th><th>${this.t('total')}</th><th>${this.t('status')}</th><th>${this.t('date')}</th></tr>
              </thead>
              <tbody>
                ${this.orders.length === 0 ? `<tr><td colspan="6" style="text-align:center; color: var(--gray-500); padding: 2rem;">${this.t('no_orders')}</td></tr>` :
                  this.orders.slice().reverse().slice(0, 6).map(o => `
                    <tr>
                      <td style="font-weight:600;">${o.id}</td>
                      <td>${o.userName || this.t('guest')}</td>
                      <td>${o.items.map(i => i.name).slice(0,2).join(', ')}${o.items.length > 2 ? ' +' + (o.items.length-2) : ''}</td>
                      <td style="font-weight:700;">$${o.total.toFixed(2)}</td>
                      <td><span class="status-badge ${o.status === 'completed' ? 'active' : 'pending'}">${o.status === 'completed' ? this.t('completed') : this.t('pending')}</span></td>
                      <td>${new Date(o.date).toLocaleDateString()}</td>
                    </tr>
                  `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  renderAdminCategories(content) {
    this.loadCategories();
    const cats = this.categories;
    const catOptions = [
      { key: 'fivem', label: this.t('fivem'), icon: '\u{1F3AE}' },
      { key: 'discord', label: this.t('discord'), icon: '\u{1F5A5}\uFE0F' },
      ...cats.map(c => ({ key: c.key, label: c.name, icon: c.icon || '\u{1F4C1}' }))
    ];
    content.innerHTML = `
      <div class="admin-topbar">
        <div>
          <h1>
            <span class="tb-icon">\u{1F4C1}</span>
            ${this.t('categories_manage')}
            <div class="tb-sub">${this.t('categories_sub')}</div>
          </h1>
        </div>
        <div class="admin-topbar-actions">
          <button class="btn-admin btn-admin-primary" onclick="APP.showAddCategoryForm()">+ ${this.t('add_category')}</button>
        </div>
      </div>
      <div class="admin-grid admin-grid-cats">
        ${catOptions.map(c => {
          const count = this.products.filter(p => p.category === c.key).length;
          return `
            <div class="cat-card">
              <div class="cat-card-icon">${c.icon}</div>
              <div class="cat-card-name">${c.label}</div>
              <div class="cat-card-count">${count} ${this.t('num_products')}</div>
              <div class="cat-card-actions">
                <button class="row-btn edit" onclick="APP.editCategory('${c.key}')" title="Edit">\u270F\uFE0F</button>
                <button class="row-btn delete" onclick="APP.deleteCategory('${c.key}')" title="Delete">\u{1F5D1}\uFE0F</button>
              </div>
            </div>
          `;
        }).join('')}
        ${cats.length === 0 ? `<div style="grid-column:1/-1; text-align:center; color:var(--gray-500); padding:2rem 0;">${this.t('no_categories')}</div>` : ''}
      </div>
      <div class="admin-card" style="margin-top:1.5rem;">
        <h3 class="admin-card-title">${this.t('add_category')}</h3>
        <form onsubmit="APP.saveCategory(event)" class="admin-form-card" style="margin:1rem 0 0; box-shadow:none;">
          <div class="form-row">
            <div class="form-group">
              <label>${this.t('category_name')}</label>
              <input type="text" id="new-cat-name" placeholder="e.g. RedM" required>
            </div>
            <div class="form-group">
              <label>${this.t('category_icon')}</label>
              <input type="text" id="new-cat-icon" placeholder="\u{1F3AF}">
            </div>
            <div class="form-group" style="align-self:flex-end;">
              <button type="submit" class="btn-admin btn-admin-primary">+ ${this.t('add_category')}</button>
            </div>
          </div>
        </form>
      </div>
    `;
  },

  showAddCategoryForm() {
    this.showAdminSection('categories');
    setTimeout(() => {
      const el = document.getElementById('new-cat-name');
      if (el) el.focus();
    }, 50);
  },

  saveCategory(e) {
    e.preventDefault();
    this.loadCategories();
    const name = document.getElementById('new-cat-name').value.trim();
    if (!name) return;
    const icon = document.getElementById('new-cat-icon').value.trim() || '\u{1F4C1}';
    const key = 'cat_' + Date.now();
    this.categories.push({ key, name, icon });
    this.saveCategories();
    this.showToast(this.t('add_cat_toast'), 'success');
    this.showAdminSection('categories');
  },

  editCategory(key) {
    this.loadCategories();
    let cat = this.categories.find(c => c.key === key);
    if (!cat && (key === 'fivem' || key === 'discord')) {
      cat = { key, name: key === 'fivem' ? this.t('fivem') : this.t('discord'), icon: key === 'fivem' ? '\u{1F3AE}' : '\u{1F5A5}\uFE0F' };
      this.categories.push(cat);
    }
    if (!cat) return;
    const newName = prompt(this.t('category_name'), cat.name);
    if (newName === null || !newName.trim()) return;
    const newIcon = prompt(this.t('category_icon'), cat.icon) || '\u{1F4C1}';
    cat.name = newName.trim();
    cat.icon = newIcon;
    this.saveCategories();
    this.showToast(this.t('updated_cat_toast'), 'success');
    this.showAdminSection('categories');
  },

  deleteCategory(key) {
    this.loadCategories();
    if (!confirm(this.t('delete_cat_confirm'))) return;
    this.categories = this.categories.filter(c => c.key !== key);
    this.products.forEach(p => { if (p.category === key) p.category = 'general'; });
    if (key === 'fivem') {
      const f = { key: 'fivem', name: 'FiveM', icon: '\u{1F3AE}' };
      this.categories.push(f);
    }
    if (key === 'discord') {
      const d = { key: 'discord', name: 'Discord', icon: '\u{1F5A5}\uFE0F' };
      this.categories.push(d);
    }
    this.saveCategories();
    this.saveProducts();
    this.showToast(this.t('deleted_cat_toast'), 'success');
    this.showAdminSection('categories');
  },

  showAdminSection(section) {
    const content = document.getElementById('admin-content');
    if (!content) return;
    if (!APP.isAdmin()) {
      const isAdminPage = window.location.pathname.includes('admin.html');
      content.innerHTML = `
        <div class="access-denied"><div>
          <h1>\ud83d\udeab</h1>
          <h1>${this.t('access_denied')}</h1>
          <p>${this.t('access_denied_desc')}</p>
          <a href="${isAdminPage ? '../index.html' : 'index.html'}" class="btn-primary">${this.t('back_to_store')}</a>
        </div></div>`;
      return;
    }
    const email = APP.currentUser ? APP.currentUser.email : '';
    const sectionPerm = {
      products: 'products',
      categories: 'products',
      coupons: 'coupons',
      orders: 'orders',
      users: 'users',
      permissions: 'users',
      settings: null
    };
    const perm = sectionPerm[section];
    const isOwnerTop = APP.isTopOwner(email);
    const allowed = section === 'dashboard'
      || (section === 'settings' && isOwnerTop)
      || (section === 'permissions' && isOwnerTop)
      || (perm !== undefined && APP.can(email, perm));
    if (!allowed) {
      content.innerHTML = `
        <div class="access-denied"><div>
          <h1>\u{1F512}</h1>
          <h1>${this.t('access_denied')}</h1>
          <p>${this.t('no_perm_desc')}</p>
        </div></div>`;
      return;
    }
    if (section === 'products') this.renderAdminProducts(content);
    else if (section === 'categories') this.renderAdminCategories(content);
    else if (section === 'coupons') this.renderAdminCoupons(content);
    else if (section === 'orders') this.renderAdminOrders(content);
    else if (section === 'users') this.renderAdminUsers(content);
    else if (section === 'permissions') this.renderAdminPermissions(content);
    else if (section === 'settings') this.renderAdminSettings(content);
    else this.renderAdminDashboard();

    document.querySelectorAll('.admin-nav-item').forEach(n => n.classList.remove('active'));
    const activeNav = document.querySelector(`.admin-nav-item[data-section="${section}"]`);
    if (activeNav) activeNav.classList.add('active');
  },

  renderAdminProducts(content) {
    content.innerHTML = `
      <div class="admin-topbar">
        <div>
          <h1>
            <span class="tb-icon">\u{1F4E5}</span>
            ${this.t('products_manage')}
            <div class="tb-sub">${this.t('manage_products_sub')}</div>
          </h1>
        </div>
        <div class="admin-topbar-actions">
          <button class="btn-admin btn-admin-primary" onclick="APP.showAddProductForm()">+ ${this.t('add_new_product')}</button>
        </div>
      </div>
      <div class="admin-table">
        <table>
          <thead>
            <tr>
              <th>${this.t('product_name')}</th>
              <th>${this.t('category_label')}</th>
              <th>${this.t('price')}</th>
              <th>${this.t('sales')}</th>
              <th>${this.t('status')}</th>
              <th>${this.t('actions')}</th>
            </tr>
          </thead>
          <tbody>
            ${this.products.map(p => `
              <tr>
                <td>
                  <div class="cell-product">
                    <div class="cp-icon">${p.image ? `<img src="${p.image}" alt="" style="width:34px;height:34px;border-radius:8px;object-fit:cover;">` : (p.icon || '\u{1F4E6}')}</div>
                    <div>
                      <div class="cp-name">${p.name} ${p.link ? '<span class="link-dot" title="' + this.t('account_link') + '">\u{1F517}</span>' : ''}</div>
                      <div class="cp-cat">#${p.id}</div>
                    </div>
                  </div>
                </td>
                <td><span class="status-badge ${p.category === 'fivem' ? 'active' : 'pending'}" style="background:rgba(255,255,255,0.05); color:var(--gray-200);">${this.resolveCategoryLabel(p.category)}</span></td>
                <td style="font-weight:700;">$${p.price.toFixed(2)}</td>
                <td>${p.sales || 0}</td>
                <td><span class="status-badge ${p.status === 'active' ? 'active' : 'inactive'}">${p.status === 'active' ? this.t('active') : this.t('inactive')}</span></td>
                <td>
                  <div class="row-actions">
                    <button class="row-btn edit" title="Edit" onclick="APP.editProduct(${p.id})">\u270F\uFE0F</button>
                    <button class="row-btn delete" title="Delete" onclick="APP.deleteProduct(${p.id})">\u{1F5D1}\uFE0F</button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  showAddProductForm(productId = null) {
    const product = productId ? this.products.find(p => p.id === productId) : null;
    const title = product ? this.t('edit_product') : this.t('add_new_product');
    const content = document.getElementById('admin-content');
    if (!content) return;
    content.innerHTML = `
      <div class="admin-topbar">
        <div>
          <h1>
            <span class="tb-icon">${product ? '\u270F\uFE0F' : '\u2795'}</span>
            ${title}
            <div class="tb-sub">${product ? this.t('update_product_details') : this.t('create_new_listing')}</div>
          </h1>
        </div>
        <div class="admin-topbar-actions">
          <button class="btn-admin btn-admin-ghost" onclick="APP.showAdminSection('products')">\u2190 ${this.t('back_to_products')}</button>
        </div>
      </div>
      <div class="admin-form-card">
        <div class="form-card-header">
          <div class="fc-icon">${product ? '\u{1F4E5}' : '\u2728'}</div>
          <h3>${product ? this.t('product_info') : this.t('new_product_details')}</h3>
        </div>
        <form onsubmit="APP.saveProduct(event, ${productId || 'null'})">
          <div class="form-group">
            <label>${this.t('product_name')}</label>
            <input type="text" id="product-name" value="${product ? product.name : ''}" placeholder="e.g. QBCore Framework" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>${this.t('category_label')}</label>
              <select id="product-category">
                <option value="fivem" ${product && product.category === 'fivem' ? 'selected' : ''}>${this.t('fivem')}</option>
                <option value="discord" ${product && product.category === 'discord' ? 'selected' : ''}>${this.t('discord')}</option>
                ${this.getCategories().map(c => `
                  <option value="${c.key}" ${product && product.category === c.key ? 'selected' : ''}>${c.name}</option>
                `).join('')}
              </select>
            </div>
            <div class="form-group">
              <label>${this.t('price_usd')}</label>
              <input type="number" id="product-price" step="0.01" value="${product ? product.price : ''}" placeholder="29.99" required>
            </div>
          </div>
          <div class="form-group">
            <label>${this.t('product_desc')}</label>
            <textarea id="product-description" placeholder="${this.t('product_desc')}..." required>${product ? product.description : ''}</textarea>
          </div>
          <div class="form-group">
            <label>${this.t('product_icon')}</label>
            <input type="text" id="product-icon" value="${product ? product.icon : ''}" placeholder="\ud83d\udce6">
          </div>
          <div class="form-group">
            <label>${this.t('product_image')}</label>
            <div style="display:flex; gap:0.8rem; align-items:center; flex-wrap:wrap;">
              <input type="file" id="product-image-input" accept="image/*" onchange="APP.previewProductImage(event)">
              <input type="hidden" id="product-image" value="${product && product.image ? product.image : ''}">
            </div>
            <div id="product-image-preview" style="margin-top:0.6rem; ${product && product.image ? '' : 'display:none;'}">
              <img id="product-image-preview-img" src="${product && product.image ? product.image : ''}" alt="" style="max-width:120px; max-height:120px; border-radius:10px; border:1px solid var(--border);">
              <button type="button" class="row-btn delete" style="margin-top:0.4rem;" onclick="APP.clearProductImage()">${this.t('remove_image')}</button>
            </div>
            <div class="form-hint">${this.t('product_image_hint')}</div>
          </div>
          <div class="form-group">
            <label>${this.t('one_per_line')}</label>
            <textarea id="product-features" rows="4" placeholder="${this.t('inst_delivery')}\n${this.t('support247')}\n${this.t('updates')}">${product && product.features ? product.features.join('\n') : ''}</textarea>
          </div>
          <div class="form-row" style="margin-bottom:1.5rem;">
            <div class="form-group">
              <label>${this.t('status')}</label>
              <select id="product-status">
                <option value="active" ${product && product.status === 'active' ? 'selected' : ''}>${this.t('active')}</option>
                <option value="inactive" ${product && product.status === 'inactive' ? 'selected' : ''}>${this.t('inactive')}</option>
              </select>
            </div>
            <div class="form-group">
              <label>${this.t('account_link')}</label>
              <input type="text" id="product-link" value="${product && product.link ? product.link : ''}" placeholder="${this.t('account_link_ph')}">
              <div class="form-hint">${this.t('account_link_hint')}</div>
            </div>
          </div>
          <button type="submit" class="btn-admin btn-admin-primary" style="margin-top:1rem;">
            ${product ? '\u{1F4C1} ' + this.t('update_product') : '\u2795 ' + this.t('add_new_product')}
          </button>
        </form>
      </div>
    `;
  },

  previewProductImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      this.showToast(this.t('image_too_large'), 'error');
      e.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target.result;
      document.getElementById('product-image').value = dataUrl;
      document.getElementById('product-image-preview-img').src = dataUrl;
      document.getElementById('product-image-preview').style.display = 'block';
    };
    reader.readAsDataURL(file);
  },

  clearProductImage() {
    document.getElementById('product-image').value = '';
    document.getElementById('product-image-input').value = '';
    document.getElementById('product-image-preview').style.display = 'none';
  },

  saveProduct(e, productId) {
    e.preventDefault();
    const data = {
      name: document.getElementById('product-name').value,
      category: document.getElementById('product-category').value,
      price: parseFloat(document.getElementById('product-price').value),
      description: document.getElementById('product-description').value,
      icon: document.getElementById('product-icon').value || '\ud83d\udce6',
      image: document.getElementById('product-image').value || null,
      features: document.getElementById('product-features').value.split('\n').filter(f => f.trim()),
      status: document.getElementById('product-status').value,
      link: document.getElementById('product-link').value.trim() || null
    };

    if (productId) {
      const idx = this.products.findIndex(p => p.id === productId);
      if (idx !== -1) {
        this.products[idx] = { ...this.products[idx], ...data };
      }
    } else {
      data.id = Date.now();
      data.sales = 0;
      this.products.push(data);
    }
    this.saveProducts();
    this.showToast(productId ? this.t('updated_toast') : this.t('added_toast'), 'success');
    this.showAdminSection('products');
  },

  editProduct(id) {
    this.showAddProductForm(id);
  },

  deleteProduct(id) {
    if (!confirm(this.t('delete_confirm'))) return;
    this.products = this.products.filter(p => p.id !== id);
    this.saveProducts();
    this.showToast(this.t('deleted_toast'), 'success');
    this.showAdminSection('products');
  },

  // ===== COUPONS =====
  loadCoupons() {
    return JSON.parse(localStorage.getItem('nove_coupons')) || [];
  },
  saveCoupons(list) {
    localStorage.setItem('nove_coupons', JSON.stringify(list));
  },
  renderAdminCoupons(content) {
    const coupons = this.loadCoupons();
    content.innerHTML = `
      <div class="admin-topbar">
        <div>
          <h1>
            <span class="tb-icon">\u{1F389}</span>
            ${this.t('coupons_manage')}
            <div class="tb-sub">${this.t('coupons_manage_sub')}</div>
          </h1>
        </div>
        <div class="admin-topbar-actions">
          <button class="btn-admin btn-admin-primary" onclick="APP.showAddCouponForm()">+ ${this.t('add_coupon')}</button>
        </div>
      </div>
      <div class="admin-table">
        <table>
          <thead>
            <tr>
              <th>${this.t('coupon_code')}</th>
              <th>${this.t('coupon_discount')}</th>
              <th>${this.t('expiry')}</th>
              <th>${this.t('usage')}</th>
              <th>${this.t('status')}</th>
              <th>${this.t('actions')}</th>
            </tr>
          </thead>
          <tbody>
            ${coupons.length === 0
              ? `<tr><td colspan="6" style="text-align:center; color:var(--gray-500); padding:2rem;">${this.t('no_coupons')}</td></tr>`
              : coupons.map(c => {
                  const expired = c.expires && new Date(c.expires) < new Date();
                  return `
                  <tr>
                    <td><span class="status-badge active" style="background:rgba(168,85,247,0.15); color:#c084fc; font-family:monospace; letter-spacing:1px;">${c.code}</span></td>
                    <td style="font-weight:700; color:#22d3ee;">${c.type === 'percent' ? c.value + '%' : '$' + c.value.toFixed(2)}</td>
                    <td>${c.expires ? new Date(c.expires).toLocaleDateString() : this.t('never')}</td>
                    <td>${c.used ? c.used : 0} / ${c.limit ? c.limit : '\u221E'}</td>
                    <td><span class="status-badge ${expired ? 'inactive' : 'active'}">${expired ? this.t('expired') : this.t('active')}</span></td>
                    <td>
                      <div class="row-actions">
                        <button class="row-btn delete" title="Delete" onclick="APP.deleteCoupon('${c.code}')">\u{1F5D1}\uFE0F</button>
                      </div>
                    </td>
                  </tr>`;
                }).join('')}
          </tbody>
        </table>
      </div>
    `;
  },
  showAddCouponForm() {
    const content = document.getElementById('admin-content');
    if (!content) return;
    content.innerHTML = `
      <div class="admin-topbar">
        <div>
          <h1>
            <span class="tb-icon">\u2795</span>
            ${this.t('add_coupon')}
            <div class="tb-sub">${this.t('coupons_manage_sub')}</div>
          </h1>
        </div>
        <div class="admin-topbar-actions">
          <button class="btn-admin btn-admin-ghost" onclick="APP.showAdminSection('coupons')">\u2190 ${this.t('back_to_coupons')}</button>
        </div>
      </div>
      <div class="admin-form-card">
        <div class="form-card-header">
          <div class="fc-icon">\u{1F389}</div>
          <h3>${this.t('new_coupon')}</h3>
        </div>
        <form onsubmit="APP.saveCoupon(event)">
          <div class="form-row">
            <div class="form-group">
              <label>${this.t('coupon_code')}</label>
              <input type="text" id="coupon-code" placeholder="SAVE20" required>
            </div>
            <div class="form-group">
              <label>${this.t('coupon_type')}</label>
              <select id="coupon-type">
                <option value="percent">% ${this.t('discount')}</option>
                <option value="fixed">$ ${this.t('discount')}</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>${this.t('coupon_value')}</label>
            <input type="number" id="coupon-value" placeholder="20" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>${this.t('coupon_expiry')} (${this.t('optional')})</label>
              <input type="date" id="coupon-expires">
            </div>
            <div class="form-group">
              <label>${this.t('coupon_limit')} (${this.t('optional')})</label>
              <input type="number" id="coupon-limit" placeholder="100">
            </div>
          </div>
          <button type="submit" class="btn-admin btn-admin-primary">\u2795 ${this.t('add_coupon')}</button>
        </form>
      </div>
    `;
  },
  saveCoupon(e) {
    e.preventDefault();
    const code = document.getElementById('coupon-code').value.trim().toUpperCase();
    const type = document.getElementById('coupon-type').value;
    const value = parseFloat(document.getElementById('coupon-value').value);
    const expires = document.getElementById('coupon-expires').value || null;
    const limit = parseInt(document.getElementById('coupon-limit').value) || null;
    if (!code || !value || value <= 0) {
      this.showToast('Please enter a valid coupon', 'error');
      return;
    }
    const coupons = this.loadCoupons();
    if (coupons.find(c => c.code.toUpperCase() === code)) {
      this.showToast('This coupon code already exists', 'error');
      return;
    }
    coupons.push({ code, type, value, expires, limit, used: 0 });
    this.saveCoupons(coupons);
    this.showToast('Coupon added', 'success');
    this.showAdminSection('coupons');
  },
  deleteCoupon(code) {
    if (!confirm(this.t('delete_confirm'))) return;
    const coupons = this.loadCoupons().filter(c => c.code !== code);
    this.saveCoupons(coupons);
    this.showToast(this.t('deleted_toast'), 'success');
    this.showAdminSection('coupons');
  },
  findValidCoupon(code) {
    const c = this.loadCoupons().find(c => c.code.toUpperCase() === code.trim().toUpperCase());
    if (!c) return null;
    if (c.expires && new Date(c.expires) < new Date()) return null;
    if (c.limit && c.used >= c.limit) return null;
    return c;
  },
  applyCoupon(code) {
    const c = this.findValidCoupon(code);
    if (!c) return null;
    const discount = c.type === 'percent'
      ? (this.getCartTotal() * c.value / 100)
      : Math.min(c.value, this.getCartTotal());
    return { coupon: c, discount };
  },

  renderAdminOrders(content) {
    content.innerHTML = `
      <div class="admin-topbar">
        <div>
          <h1>
            <span class="tb-icon">\u{1F4B3}</span>
            ${this.t('orders_manage')}
            <div class="tb-sub">${this.t('order_success_sub')}</div>
          </h1>
        </div>
        <div class="admin-topbar-actions">
          <span class="status-badge active" style="background:rgba(255,255,255,0.05); color:var(--gray-200);">${this.orders.length} ${this.t('total_badge')}</span>
        </div>
      </div>
      <div class="admin-table">
        <table>
          <thead>
            <tr>
              <th>${this.t('order')}</th>
              <th>${this.t('customer')}</th>
              <th>${this.t('products')}</th>
              <th>${this.t('total')}</th>
              <th>${this.t('status')}</th>
              <th>${this.t('date')}</th>
            </tr>
          </thead>
          <tbody>
            ${this.orders.length === 0 ? `<tr><td colspan="6" style="text-align:center; color: var(--gray-500); padding: 2rem;">${this.t('no_orders')}</td></tr>` :
              this.orders.slice().reverse().map(o => `
                <tr>
                  <td style="font-weight:600;">${o.id}</td>
                  <td>
                    <div class="cell-product">
                      <div class="cp-icon">\u{1F464}</div>
                      <div>
                        <div class="cp-name">${o.userName || this.t('guest')}</div>
                        <div class="cp-cat">${o.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>${o.items.map(i => i.name).slice(0,2).join(', ')}${o.items.length > 2 ? ' +' + (o.items.length-2) : ''}</td>
                  <td style="font-weight:700;">$${o.total.toFixed(2)}</td>
                  <td><span class="status-badge ${o.status === 'completed' ? 'active' : 'pending'}">${o.status === 'completed' ? this.t('completed') : this.t('pending')}</span></td>
                  <td>${new Date(o.date).toLocaleDateString()}</td>
                </tr>
              `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  renderAdminUsers(content) {
    const users = JSON.parse(localStorage.getItem('nove_users')) || [];
    const me = APP.currentUser ? APP.currentUser.email : '';
    const isTopOwner = APP.isTopOwner(me);
    const getRole = (u) => {
      if (u.email === APP.ADMIN_EMAIL) return 'owner';
      const r = APP.loadRoles()[u.role];
      return (r && u.role !== 'user') ? u.role : 'user';
    };
    const setRole = (email, role) => {
      const list = JSON.parse(localStorage.getItem('nove_users')) || [];
      const target = list.find(u => u.email === email);
      const meEmail = APP.currentUser ? APP.currentUser.email : '';
      if (!APP.isTopOwner(meEmail)) {
        APP.showToast('Only the Owner can change roles', 'error');
        return;
      }
      if (email === APP.ADMIN_EMAIL) {
        APP.showToast('The fixed owner role cannot be changed', 'error');
        return;
      }
      if (meEmail === email && role !== 'owner') {
        APP.showToast('You cannot remove your own owner role', 'error');
        return;
      }
      if (target) {
        target.role = role;
        localStorage.setItem('nove_users', JSON.stringify(list));
        APP.renderAdminUsers(document.getElementById('admin-content'));
        APP.showToast('Role updated', 'success');
      }
    };
    content.innerHTML = `
      <div class="admin-topbar">
        <div>
          <h1>
            <span class="tb-icon">\u{1F465}</span>
            ${this.t('users_manage')}
            <div class="tb-sub">${this.t('registered_users')}</div>
          </h1>
        </div>
        <div class="admin-topbar-actions">
          <span class="status-badge active" style="background:rgba(255,255,255,0.05); color:var(--gray-200);">${users.length} ${this.t('total_badge')}</span>
        </div>
      </div>

      <div class="users-card">
        <div class="users-card-header">
          <h3>\u{1F465} ${this.t('users_list')}</h3>
          <span class="status-badge active" style="background:rgba(255,255,255,0.05); color:var(--gray-200);">${users.length}</span>
        </div>
        <div class="users-table" dir="rtl">
          <div class="users-table-head">
            <span>${this.t('name')}</span>
            <span>${this.t('authority')}</span>
          </div>
          ${users.length === 0
            ? `<div class="users-empty">${this.t('no_users')}</div>`
            : users.map(u => {
                const role = getRole(u);
                const avatar = u.avatar ? u.avatar : APP.generateAvatar((u.name||'U')[0].toUpperCase());
                return `
                  <div class="users-row">
                    <div class="users-id">
                      <img class="users-avatar" src="${avatar}" alt="">
                      <div class="users-meta">
                        <span class="users-name">${u.name || this.t('guest')}</span>
                        <span class="users-email">${u.email}</span>
                      </div>
                    </div>
                    <div class="role-group">
                      ${Object.entries(APP.loadRoles()).map(([rkey, rdef]) => {
                        const locked = !isTopOwner
                          || (rkey === 'owner' && (u.email === APP.ADMIN_EMAIL || u.email === me));
                        const isActive = role === rkey;
                        return `
                        <button class="role-btn ${isActive ? 'active role-'+rkey : ''}" style="${isActive ? 'background:linear-gradient(135deg,'+rdef.color+',#8b5cf6); border-color:transparent; color:#fff;' : ''}" ${locked ? 'disabled' : ''} onclick="APP.__setUserRole('${u.email}', '${rkey}')">
                          ${rdef.icon} ${rdef.name}
                        </button>`;
                      }).join('')}
                    </div>
                  </div>`;
              }).join('')}
        </div>
      </div>
    `;
    APP.__setUserRole = setRole;
  },

  // ===== PERMISSIONS (Owner only) =====
  defaultRoles() {
    return {
      user:       { name: 'User',       color: '#22d3ee',      icon: '\u{1F464}', perms: { products:false, orders:false, coupons:false, users:false, roles:false } },
      moderator:  { name: 'Moderator',  color: '#10b981',      icon: '\u{1F6E1}', perms: { products:false, orders:false, coupons:false, users:false, roles:false } },
      admin:      { name: 'Admin',      color: '#f59e0b',      icon: '\u{2699}', perms: { products:true,  orders:true,  coupons:true,  users:true,  roles:true } },
      owner:      { name: 'Owner',      color: '#c084fc',      icon: '\u{1F451}', perms: { products:true,  orders:true,  coupons:true,  users:true,  roles:true } }
    };
  },
  loadRoles() {
    const stored = JSON.parse(localStorage.getItem('nove_roles')) || {};
    return { ...this.defaultRoles(), ...stored };
  },
  saveRoles(roles) {
    localStorage.setItem('nove_roles', JSON.stringify(roles));
  },
  roleName(key) {
    const r = this.loadRoles()[key];
    return r ? r.name : key;
  },
  getRolePerms(key) {
    const r = this.loadRoles()[key];
    return r ? r.perms : {};
  },
  isTopOwner(email) {
    if (email === this.ADMIN_EMAIL) return true;
    return this.getUserRole(email) === 'owner';
  },
  isFixedOwner(email) {
    return email === this.ADMIN_EMAIL;
  },
  can(email, perm) {
    if (this.isTopOwner(email)) return true;
    const role = this.getUserRole(email);
    if (!role || role === 'user') return false;
    const r = this.loadRoles()[role];
    if (r && perm in r.perms) return !!r.perms[perm];
    return role === 'owner';
  },
  addRole() {
    if (!this.isTopOwner(this.currentUser ? this.currentUser.email : '')) {
      this.showToast(this.t('owners_only'), 'error'); return;
    }
    const name = (document.getElementById('new-role-name').value || '').trim();
    const color = document.getElementById('new-role-color').value || '#8b5cf6';
    const icon = (document.getElementById('new-role-icon').value || '\u{1F511}').trim();
    if (!name) { this.showToast(this.t('role_name_required'), 'error'); return; }
    const key = 'role_' + Date.now();
    const roles = this.loadRoles();
    roles[key] = {
      name,
      color,
      icon,
      perms: { products:false, orders:false, coupons:false, users:false, roles:false }
    };
    this.saveRoles(roles);
    this.showToast(this.t('role_added'), 'success');
    this.renderAdminPermissions(document.getElementById('admin-content'));
  },
  deleteRole(roleKey) {
    if (!this.isTopOwner(this.currentUser ? this.currentUser.email : '')) {
      this.showToast(this.t('owners_only'), 'error'); return;
    }
    if (roleKey === 'owner' || roleKey === 'user') {
      this.showToast(this.t('role_fixed'), 'error');
      return;
    }
    if (!confirm(this.t('delete_role_confirm'))) return;
    const roles = this.loadRoles();
    const list = JSON.parse(localStorage.getItem('nove_users')) || [];
    delete roles[roleKey];
    list.forEach(u => { if (u.role === roleKey) u.role = 'user'; });
    this.saveRoles(roles);
    localStorage.setItem('nove_users', JSON.stringify(list));
    this.showToast(this.t('deleted_toast'), 'success');
    this.renderAdminPermissions(document.getElementById('admin-content'));
  },
  togglePerm(roleKey, permKey) {
    if (!this.isTopOwner(this.currentUser ? this.currentUser.email : '')) {
      this.showToast(this.t('owners_only'), 'error'); return;
    }
    const roles = this.loadRoles();
    if (!roles[roleKey]) return;
    roles[roleKey].perms[permKey] = !roles[roleKey].perms[permKey];
    this.saveRoles(roles);
    this.showToast(this.t('perms_saved'), 'success');
  },
  setRoleColor(roleKey) {
    if (!this.isTopOwner(this.currentUser ? this.currentUser.email : '')) {
      this.showToast(this.t('owners_only'), 'error'); return;
    }
    const roles = this.loadRoles();
    if (!roles[roleKey]) return;
    roles[roleKey].color = document.getElementById('color-' + roleKey).value;
    this.saveRoles(roles);
    this.renderAdminPermissions(document.getElementById('admin-content'));
  },
  renderAdminPermissions(content) {
    if (!this.isTopOwner(this.currentUser ? this.currentUser.email : '')) {
      content.innerHTML = `
        <div class="access-denied"><div>
          <h1>\u{1F512}</h1>
          <h1>${this.t('owners_only')}</h1>
          <p>${this.t('permissions_owner_only_desc')}</p>
        </div></div>`;
      return;
    }
    const roles = this.loadRoles();
    const rows = [
      { key: 'products',  label: this.t('perm_products'),  icon: '\u{1F4E6}' },
      { key: 'orders',    label: this.t('perm_orders'),    icon: '\u{1F4B3}' },
      { key: 'coupons',   label: this.t('perm_coupons'),   icon: '\u{1F389}' },
      { key: 'users',     label: this.t('perm_users'),     icon: '\u{1F465}' },
      { key: 'roles',     label: this.t('perm_roles'),     icon: '\u{1F511}' }
    ];
    const deletableKeys = ['owner', 'user'];
    const fixed = ['user', 'owner'];
    const roleCard = (rkey, role) => {
      const deletable = !deletableKeys.includes(rkey);
      return `
        <div class="admin-form-card perm-card">
          <div class="form-card-header">
            <div class="fc-icon" style="background:${role.color};">${role.icon}</div>
            <h3>${role.name}${rkey === 'owner' ? ' <span style="font-size:0.7rem; display:block; color:var(--gray-400); margin-top:2px;">' + this.t('store_owner') + ': ' + this.ADMIN_EMAIL + '</span>' : ''}</h3>
            <span style="margin-right:auto; margin-left:0.6rem; display:flex; align-items:center; gap:0.5rem;">
              <label style="font-size:0.7rem; color:var(--gray-400); cursor:pointer;">${this.t('color')}
                <input type="color" id="color-${rkey}" value="${role.color}" onchange="APP.setRoleColor('${rkey}')" style="background:none; border:none; width:26px; height:26px; cursor:pointer; vertical-align:middle;">
              </label>
              ${deletable ? `<button class="row-btn delete" title="Delete role" onclick="APP.deleteRole('${rkey}')">\u{1F5D1}\uFE0F</button>` : ''}
            </span>
          </div>
          <div style="font-size:0.72rem; color:var(--gray-500); margin:-0.4rem 0 0.6rem;">${rkey}</div>
          ${fixed.includes(rkey) ? `<div style="font-size:0.75rem; color:var(--gray-400); padding:0.4rem 0;">${this.t('role_fixed_hint')}</div>` : rows.map(r => `
            <div class="perm-row">
              <div class="perm-label">${r.icon} ${r.label}</div>
              <label class="switch">
                <input type="checkbox" ${role.perms[r.key] ? 'checked' : ''} onchange="APP.togglePerm('${rkey}','${r.key}')">
                <span class="slider"></span>
              </label>
            </div>`).join('')}
        </div>`;
    };
    content.innerHTML = `
      <div class="admin-topbar">
        <div>
          <h1>
            <span class="tb-icon">\u{1F512}</span>
            ${this.t('permissions_manage')}
            <div class="tb-sub">${this.t('permissions_manage_sub')}</div>
          </h1>
        </div>
      </div>
      <div class="admin-form-card" style="max-width:760px; margin-bottom:1.5rem; background:linear-gradient(135deg, rgba(139,92,246,0.12), rgba(217,70,239,0.10)); border-color:rgba(168,85,247,0.4);">
        <div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap;">
          <div style="width:44px; height:44px; border-radius:12px; background:linear-gradient(135deg,#8b5cf6,#d946ef); display:flex; align-items:center; justify-content:center; font-size:22px; flex-shrink:0;">\u{1F451}</div>
          <div style="flex:1; min-width:220px;">
            <div style="font-weight:700; color:#c084fc; font-size:0.95rem;">${this.t('owner_panel_title')}</div>
            <div style="font-size:0.75rem; color:var(--gray-400); margin-top:2px; line-height:1.6;">${this.t('owner_panel_desc')}: <strong style="color:var(--gray-200);">${this.ADMIN_EMAIL}</strong></div>
          </div>
        </div>
      </div>
      <div class="admin-form-card" style="max-width:560px; margin-bottom:1.5rem;">
        <div class="form-card-header">
          <div class="fc-icon">\u2795</div>
          <h3>${this.t('add_new_role')}</h3>
        </div>
        <form onsubmit="APP.addRole(); return false;" style="display:grid; grid-template-columns:1fr 120px 70px auto; gap:0.7rem; align-items:end;">
          <div class="form-group" style="margin:0;">
            <label>${this.t('role_name')}</label>
            <input type="text" id="new-role-name" placeholder="${this.t('role_name_ph')}" required>
          </div>
          <div class="form-group" style="margin:0;">
            <label>${this.t('color')}</label>
            <input type="color" id="new-role-color" value="#8b5cf6" style="height:38px; padding:2px; background:none; border:1px solid var(--border); border-radius:8px; cursor:pointer;">
          </div>
          <div class="form-group" style="margin:0;">
            <label>${this.t('icon')}</label>
            <input type="text" id="new-role-icon" placeholder="🔑" style="text-align:center;">
          </div>
          <button type="submit" class="btn-admin btn-admin-primary">+ ${this.t('add_role')}</button>
        </form>
      </div>
      <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1.5rem;">
        ${Object.entries(roles).filter(([k]) => k !== 'owner').map(([k, r]) => roleCard(k, r)).join('')}
      </div>
    `;
  },
  applyNavPermissions() {
    const email = this.currentUser ? this.currentUser.email : '';
    const isTop = this.isTopOwner(email);
    const map = {
      products: ['products'],
      categories: ['products'],
      coupons: ['coupons'],
      orders: ['orders'],
      users: ['users']
    };
    document.querySelectorAll('.admin-nav-item').forEach(btn => {
      const sec = btn.getAttribute('data-section');
      if (!sec) return;
      if (sec === 'permissions') { btn.style.display = isTop ? '' : 'none'; return; }
      if (sec === 'settings') { btn.style.display = isTop ? '' : 'none'; return; }
      if (isTop) { btn.style.display = ''; return; }
      const permsOf = map[sec] || null;
      const ok = permsOf ? permsOf.some(p => this.can(email, p)) : false;
      btn.style.display = ok ? '' : 'none';
    });
  },

  renderAdminSettings(content) {
    content.innerHTML = `
      <div class="admin-topbar">
        <div>
          <h1>
            <span class="tb-icon">\u2699\uFE0F</span>
            ${this.t('settings_manage')}
            <div class="tb-sub">${this.t('store_config')}</div>
          </h1>
        </div>
      </div>

      <div class="admin-form-card" style="max-width:760px;">
        <div class="form-card-header">
          <div class="fc-icon">\u{1F3E2}</div>
          <h3>${this.t('store_config')}</h3>
        </div>
        <div class="form-group">
          <label>${this.t('store_name')}</label>
          <input type="text" value="${APP.STORE_NAME}" id="setting-store-name" placeholder="Nove Store">
        </div>
        <div class="form-group">
          <label>${this.t('owner_email')}</label>
          <input type="email" value="${APP.ADMIN_EMAIL}" placeholder="${APP.ADMIN_EMAIL}" style="opacity:0.5;" disabled>
          <div style="font-size:0.7rem; color:var(--gray-500); margin-top:6px;">${this.t('owner_email_hint')}</div>
        </div>
        <div class="form-group" style="margin-top:1.5rem; padding-top:1.5rem; border-top:1px solid var(--border);">
          <label>${this.t('store_logo')}</label>
          <div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap;">
            <div id="logo-preview" style="width:64px; height:64px; border-radius:12px; background:var(--gray-800); border:1px solid var(--border); display:flex; align-items:center; justify-content:center; overflow:hidden;">
              ${APP.STORE_LOGO ? `<img src="${APP.STORE_LOGO}" alt="" style="width:100%; height:100%; object-fit:contain;">` : `<span style="color:var(--gray-500); font-weight:800;">N</span>`}
            </div>
            <div style="display:flex; flex-direction:column; gap:0.5rem;">
              <label class="btn-admin btn-admin-ghost" style="cursor:pointer; text-align:center;">
                \u{1F4C2} ${this.t('upload_logo')}
                <input type="file" id="setting-logo" accept="image/*" onchange="APP.uploadLogo(event)" style="display:none;">
              </label>
              <button class="row-btn delete" onclick="APP.removeLogo()" style="${APP.STORE_LOGO ? '' : 'display:none;'}" id="remove-logo-btn">\u{1F5D1}\uFE0F ${this.t('remove_logo')}</button>
            </div>
          </div>
          <div style="font-size:0.7rem; color:var(--gray-500); margin-top:6px;">${this.t('upload_logo_hint')}</div>
        </div>
      </div>

      <div class="admin-form-card" style="margin-top:1.5rem; max-width:760px;">
        <div class="form-card-header">
          <div class="fc-icon">\u{1F4B0}</div>
          <h3>${this.t('paypal_integration')}</h3>
        </div>
        <div class="form-group">
          <label>${this.t('paypal_client')}</label>
          <input type="text" id="setting-paypal" value="${APP.PAYPAL_CLIENT_ID}" placeholder="AdZijgGKQiP5hkM7nWSUQgVFH4dBS8K5SuClk9n9B1NP6KHUTe84pTcjVWBF7fIe8IZ-XXxhfJ0SegzO">
          <div style="font-size:0.7rem; color:var(--gray-500); margin-top:6px;">${this.t('paypal_hint')}</div>
        </div>
        <div style="background:rgba(255,255,255,0.03); border:1px solid var(--border); border-radius:10px; padding:1rem 1.2rem; margin-top:0.5rem;">
          <div style="font-size:0.82rem; font-weight:600; margin-bottom:0.6rem; color:var(--gray-200);">\u{1F4CB} ${this.t('paypal_integration')}:</div>
          <ol style="margin:0; padding-right:1.2rem; font-size:0.75rem; color:var(--gray-400); line-height:1.8;">
            <li>\u{1F50D} اذهب إلى <a href="https://developer.paypal.com/dashboard/applications" target="_blank" style="color:#8ab4f8;">PayPal Developer Dashboard</a></li>
            <li>\u{1F4DD} أنشئ تطبيق جديد أو استخدم تطبيق موجود</li>
            <li>\u{1F511} انسخ <strong style="color:var(--gray-200);">Client ID</strong> من قسم Sandbox أو Live</li>
            <li>\u{1F310} أضف رابط موقعك في <strong style="color:var(--gray-200);">Return URL</strong></li>
            <li>\u{1F4BE} اضغط <strong style="color:var(--gray-200);">حفظ جميع الإعدادات</strong></li>
          </ol>
        </div>
      </div>

      <div class="admin-form-card" style="margin-top:1.5rem; max-width:760px;">
        <div class="form-card-header">
          <div class="fc-icon">\u{1F4E2}</div>
          <h3>${this.t('social_links')}</h3>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.9rem;">
          <div class="form-group">
            <label><span style="color:#E1306C;">\u{1F4F7}</span> Instagram</label>
            <input type="text" id="social-instagram" value="${APP.SOCIAL_LINKS.instagram || ''}" placeholder="https://instagram.com/...">
          </div>
          <div class="form-group">
            <label><span style="color:#00f2ea;">\u{1F595}</span> TikTok</label>
            <input type="text" id="social-tiktok" value="${APP.SOCIAL_LINKS.tiktok || ''}" placeholder="https://tiktok.com/@...">
          </div>
          <div class="form-group">
            <label><span style="color:#5865F2;">\u{1F3AC}</span> Discord</label>
            <input type="text" id="social-discord" value="${APP.SOCIAL_LINKS.discord || ''}" placeholder="https://discord.gg/...">
          </div>
          <div class="form-group">
            <label><span style="color:#FF0000;">\u{1F4FA}</span> YouTube</label>
            <input type="text" id="social-youtube" value="${APP.SOCIAL_LINKS.youtube || ''}" placeholder="https://youtube.com/@...">
          </div>
          <div class="form-group">
            <label><span style="color:#229ED9;">\u{2709}\uFE0F</span> Telegram</label>
            <input type="text" id="social-telegram" value="${APP.SOCIAL_LINKS.telegram || ''}" placeholder="https://t.me/...">
          </div>
          <div class="form-group">
            <label><span style="color:var(--gray-300);">\u{1F4F0}</span> X / Twitter</label>
            <input type="text" id="social-x" value="${APP.SOCIAL_LINKS.x || ''}" placeholder="https://x.com/...">
          </div>
        </div>
        <div style="font-size:0.72rem; color:var(--gray-500); margin-top:0.4rem;">${this.t('social_links_hint')}</div>
      </div>

      <button class="btn-admin btn-admin-primary" style="margin-top:1.5rem;" onclick="APP.saveSettings()">\u{1F4BE} ${this.t('save_all')}</button>
    `;
  },

  uploadLogo(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      this.showToast(this.t('image_too_large'), 'error');
      e.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target.result;
      APP.STORE_LOGO = dataUrl;
      const prev = document.getElementById('logo-preview');
      if (prev) prev.innerHTML = `<img src="${dataUrl}" alt="" style="width:100%; height:100%; object-fit:contain;">`;
      const btn = document.getElementById('remove-logo-btn');
      if (btn) btn.style.display = '';
      const settings = JSON.parse(localStorage.getItem('nove_settings')) || {};
      settings.logo = dataUrl;
      settings.storeName = APP.STORE_NAME;
      settings.paypal = APP.PAYPAL_CLIENT_ID;
      localStorage.setItem('nove_settings', JSON.stringify(settings));
      APP.applyLogo();
      this.showToast(this.t('logo_uploaded'), 'success');
    };
    reader.readAsDataURL(file);
  },

  removeLogo() {
    APP.STORE_LOGO = '';
    const prev = document.getElementById('logo-preview');
    if (prev) prev.innerHTML = `<span style="color:var(--gray-500); font-weight:800;">N</span>`;
    const btn = document.getElementById('remove-logo-btn');
    if (btn) btn.style.display = 'none';
    APP.applyLogo();
    this.saveSettings();
  },

  applyLogo() {
    const brandIcon = document.querySelector('.nav-brand-icon');
    if (APP.STORE_LOGO && brandIcon) {
      brandIcon.style.background = 'transparent';
      brandIcon.style.width = '48px';
      brandIcon.style.height = '48px';
      brandIcon.innerHTML = `<img src="${APP.STORE_LOGO}" alt="" style="width:100%; height:100%; object-fit:contain; border-radius:10px;">`;
    } else if (brandIcon) {
      brandIcon.style.background = '';
      brandIcon.style.width = '';
      brandIcon.style.height = '';
      brandIcon.textContent = 'N';
    }
  },

  renderSocialIcons() {
    const container = document.getElementById('social-icons');
    if (!container) return;
    const items = [
      { key: 'instagram', icon: '\u{1F4F7}', color: '#E1306C', label: 'Instagram' },
      { key: 'tiktok',    icon: '\u{1F595}', color: '#00f2ea', label: 'TikTok' },
      { key: 'discord',   icon: '\u{1F3AC}', color: '#5865F2', label: 'Discord' },
      { key: 'youtube',   icon: '\u{1F4FA}', color: '#FF0000', label: 'YouTube' },
      { key: 'telegram',  icon: '\u{2709}\uFE0F', color: '#229ED9', label: 'Telegram' },
      { key: 'x',         icon: '\u{1F4F0}', color: '#9ca3af', label: 'X' }
    ];
    const html = items
      .filter(it => this.SOCIAL_LINKS[it.key])
      .map(it => `<a href="${this.SOCIAL_LINKS[it.key]}" target="_blank" rel="noopener" class="social-icon" title="${it.label}" style="--sc:${it.color};">${it.icon}</a>`)
      .join('');
    container.innerHTML = html;
    container.style.display = html ? 'flex' : 'none';
  },

  saveSettings() {
    APP.STORE_NAME = document.getElementById('setting-store-name').value || 'Nove Store';
    APP.PAYPAL_CLIENT_ID = document.getElementById('setting-paypal').value;
    const gid = id => { const el = document.getElementById(id); return el ? el.value.trim() : ''; };
    APP.SOCIAL_LINKS = {
      instagram: gid('social-instagram'),
      tiktok: gid('social-tiktok'),
      discord: gid('social-discord'),
      youtube: gid('social-youtube'),
      telegram: gid('social-telegram'),
      x: gid('social-x')
    };
    localStorage.setItem('nove_settings', JSON.stringify({
      storeName: APP.STORE_NAME,
      logo: APP.STORE_LOGO,
      paypal: APP.PAYPAL_CLIENT_ID,
      social: APP.SOCIAL_LINKS
    }));
    document.querySelectorAll('.nav-brand-text').forEach(el => {
      el.innerHTML = APP.STORE_NAME.toUpperCase().replace(' ', '') + ' <span>STORE</span>';
    });
    this.applyLogo();
    this.renderSocialIcons();
    this.showToast(this.t('saved'), 'success');
  },

  // ===== NAVBAR =====
  initNavbar() {
    const toggle = document.querySelector('.mobile-toggle');
    const links = document.querySelector('.nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', () => links.classList.toggle('active'));
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      const userMenu = document.querySelector('.user-menu');
      const dropdown = document.querySelector('.user-dropdown');
      if (userMenu && dropdown && !userMenu.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  },

  initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
      }
    });
  },

  // ===== TOAST =====
  showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${type === 'success' ? '\u2713' : '\u2717'}</span> ${message}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
};

document.addEventListener('DOMContentLoaded', () => APP.init());
