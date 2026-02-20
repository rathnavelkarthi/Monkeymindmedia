// -------------------------------------------------------------------------
// REQUISITE LIBRARY CHECK
// -------------------------------------------------------------------------
$lib_path = __DIR__ . '/PHPMailer/src/';
if (!file_exists($lib_path . 'PHPMailer.php')) {
    header("Content-Type: application/json");
    echo json_encode([
        "status" => "missing_library", 
        "message" => "PHPMailer library files are missing in /public/PHPMailer/. Please upload them to your server."
    ]);
    exit;
}

require $lib_path . 'Exception.php';
require $lib_path . 'PHPMailer.php';
require $lib_path . 'SMTP.php';

/* -----------------------------
   SECURITY HEADERS
-------------------------------- */
header("Content-Type: application/json");
header("X-Frame-Options: SAMEORIGIN");
header("X-Content-Type-Options: nosniff");

/* -----------------------------
   REQUEST VALIDATION
-------------------------------- */
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method Not Allowed"]);
    exit;
}

/* -----------------------------
   SANITIZE INPUT
-------------------------------- */
function clean($data) {
    return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

$full_name = clean($_POST['full_name'] ?? '');
$organization = clean($_POST['organization'] ?? '');
$role_title = clean($_POST['role_title'] ?? '');
$domain_selected = clean($_POST['domain_selected'] ?? '');
$budget_tier = clean($_POST['budget_tier'] ?? '');
$objective = clean($_POST['objective'] ?? '');
$email = clean($_POST['email'] ?? '');
$whatsapp = clean($_POST['whatsapp'] ?? '');

$ip = $_SERVER['REMOTE_ADDR'];
$userAgent = $_SERVER['HTTP_USER_AGENT'];

/* -----------------------------
   VALIDATION
-------------------------------- */
if (!$full_name || !$email || !$domain_selected) {
    echo json_encode(["status" => "invalid", "message" => "Required fields missing"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "invalid_email", "message" => "Invalid email format"]);
    exit;
}

/* -----------------------------
   DATABASE CONFIGURATION
-------------------------------- */
$host = "localhost";
$dbname = "YOUR_DB_NAME"; 
$db_user = "YOUR_DB_USER"; 
$db_pass = "YOUR_DB_PASSWORD"; 

// Check for placeholders
if ($dbname === "YOUR_DB_NAME" || $db_user === "YOUR_DB_USER") {
    echo json_encode(["status" => "config_required", "message" => "Database configuration required in strategic-intake.php"]);
    exit;
}

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $db_user, $db_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare("
        INSERT INTO strategic_briefings 
        (full_name, organization, role_title, domain_selected, budget_tier, objective, email, whatsapp, ip_address, user_agent)
        VALUES 
        (:full_name, :organization, :role_title, :domain_selected, :budget_tier, :objective, :email, :whatsapp, :ip, :user_agent)
    ");

    $stmt->execute([
        ':full_name' => $full_name,
        ':organization' => $organization,
        ':role_title' => $role_title,
        ':domain_selected' => $domain_selected,
        ':budget_tier' => $budget_tier,
        ':objective' => $objective,
        ':email' => $email,
        ':whatsapp' => $whatsapp,
        ':ip' => $ip,
        ':user_agent' => $userAgent
    ]);

} catch (PDOException $e) {
    echo json_encode(["status" => "db_error", "message" => "Storage failure: " . $e->getMessage()]);
    exit;
}

/* -----------------------------
   EMAIL NOTIFICATION (SMTP 465 SSL)
-------------------------------- */
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'contact@monkeymindmedia.com';
    $mail->Password   = 'Desmond@rathnavel1997'; 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    $mail->setFrom('contact@monkeymindmedia.com', 'Monkey Mind Media - Project Portal');
    $mail->addAddress('contact@monkeymindmedia.com');

    $mail->Subject = 'New Strategic Project Inquiry - ' . $organization;

    $mail->Body = "
--------------------------------------------------
STRATEGIC BRIEFING SUBMISSION
--------------------------------------------------

NAME: $full_name
ORGANIZATION: $organization
ROLE: $role_title
DOMAIN: $domain_selected
BUDGET TIER: $budget_tier
EMAIL: $email
WHATSAPP: $whatsapp

STRATEGIC OBJECTIVE:
$objective

--------------------------------------------------
METADATA
--------------------------------------------------
IP: $ip
AGENT: $userAgent
TIMESTAMP: " . date("Y-m-d H:i:s") . "
";

    $mail->send();

} catch (Exception $e) {
    // Database insert was successful, but mail failed
    echo json_encode(["status" => "mail_partial_success", "message" => "Logged but notification delivery failed"]);
    exit;
}

echo json_encode(["status" => "success", "message" => "Briefing ingested"]);
exit;
