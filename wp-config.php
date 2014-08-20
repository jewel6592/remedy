<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'remedy');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('BASE_URL',       'http://localhost/remedy/');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'j[7ML(JVboK()tCmund]?{<,f[Prz[#(u9q3O3i-IaK[{bKQV;ydZh}::)qV9D q');
define('SECURE_AUTH_KEY',  '^R~L5(+S:@: *[Qmay@+6<prbIo;6jB|sVLcf& ?Z}Lxlu$|:j9hz=/M^n<:S+Vs');
define('LOGGED_IN_KEY',    '$5+GGbPv?g*4q10>]i:LUDmb7iMa:_ r@Wqn-Q?+!-(`r,O/R--A7a5^vx#z^PFr');
define('NONCE_KEY',        'C5`*A@S]Q@@3!R2ll2wmv2C|xM(5Vo1_IYDYXfE^J5PlU>1(6dM+mD$:BKA<-bPl');
define('AUTH_SALT',        ',0wR&y0e=0HLq{S3>:cLnjN=Ui~S]Lf&|Y1N1Rbdq8CS2`cf]{fP.SN@G^p+$8lq');
define('SECURE_AUTH_SALT', 'yJ[+C+5#IeN*vTG5.<>}^!]l:i8i/*.9)x*3x1| 4-v7g|{,qPdj&o n+P50XzQ7');
define('LOGGED_IN_SALT',   'T`FC+A)bB8/L.GP_)v>I@:qV8vVd;.P7j1zl^jYOc.rN^+lGSf:i.:I~|D=5d5@e');
define('NONCE_SALT',       'E77pd|,DbUrqYe.BZOT~lteV9R-59dMcz]?y*@kJZ<jWM+z/6|rs2XP^/jC7CExG');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 're_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
