<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do banco de dados
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do banco de dados - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'wp_udemy' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Ch!#;{B(nd23Hq-]&5$8ZN7*bW&Y7t6L@G~B|5y%|8^S%~GV[UiD00lcTAWZb`8H' );
define( 'SECURE_AUTH_KEY',  'p,%c-rC9O}(nZSP&ktmX8*^Z#h,~^ezI5^L7Ucuk+o3[4%y?3YpOjc8gJ QrJr0y' );
define( 'LOGGED_IN_KEY',    'MA.[?`H,r0$h<~,bSUW+h7E4ndVu>X7#P9W#t $L*<t#(7aO`RgS<CVyS.#N3W!u' );
define( 'NONCE_KEY',        'OM(a?1fzNG5Y)Hw4,`zd.jccE2R?$t?)po;[Z29dmD4)om=|m4A~/YO73+|v`l)!' );
define( 'AUTH_SALT',        '#903lc5,B]{m)c#+`<WO3?(7;yNOsb *LT!G&:65Y=sI@6#R8DcvO Aj>r=I<swW' );
define( 'SECURE_AUTH_SALT', '6933$&ZJZ^3q~dEJ(zEh,P0#.FUQd?/WgukNWnUlYdJUPqcD%PvLx8:KzYc(%S~W' );
define( 'LOGGED_IN_SALT',   'n$wp<Fw?hUP/zx(i $I^HN;Sx)RT>x?_R;.4*W7Lg :Z(i[-PX/R`^!>=][2r@U{' );
define( 'NONCE_SALT',       '-WQ[_P42kyMT9L/OaAvHzZR^-c*U~8;X}bld,pU:W(:MHT]*xHBw<At=xpv)3rJu' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Adicione valores personalizados entre esta linha até "Isto é tudo". */



/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';
