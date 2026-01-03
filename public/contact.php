<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Nur POST-Anfragen erlauben
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// POST-Daten lesen
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validierung
if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Ungültige Daten']);
    exit;
}

$firstName = isset($data['firstName']) ? trim($data['firstName']) : '';
$lastName = isset($data['lastName']) ? trim($data['lastName']) : '';
$company = isset($data['company']) ? trim($data['company']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$service = isset($data['service']) ? trim($data['service']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';
$privacyAccepted = isset($data['privacyAccepted']) ? $data['privacyAccepted'] : false;

// Pflichtfelder prüfen
if (empty($firstName) || empty($lastName) || empty($email) || empty($service) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Bitte füllen Sie alle Pflichtfelder aus']);
    exit;
}

// Datenschutz prüfen
if (!$privacyAccepted) {
    http_response_code(400);
    echo json_encode(['error' => 'Bitte akzeptieren Sie die Datenschutzhinweise']);
    exit;
}

// E-Mail-Validierung
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Ungültige E-Mail-Adresse']);
    exit;
}

// Service-Labels
$serviceLabels = [
    'neue-website' => 'Neue Website erstellen',
    'website-optimieren' => 'Bestehende Website optimieren',
    'seo' => 'SEO & Sichtbarkeit',
    'sonstiges' => 'Sonstiges'
];

$serviceLabel = isset($serviceLabels[$service]) ? $serviceLabels[$service] : $service;
$fullName = $firstName . ' ' . $lastName;
$companyText = !empty($company) ? $company : 'Nicht angegeben';

// HTML-Escape Funktion
function escapeHtml($text) {
    return htmlspecialchars($text, ENT_QUOTES, 'UTF-8');
}

// E-Mail-Inhalt vorbereiten
$safeFirstName = escapeHtml($firstName);
$safeLastName = escapeHtml($lastName);
$safeCompany = escapeHtml($companyText);
$safeEmail = escapeHtml($email);
$safeService = escapeHtml($serviceLabel);
$safeMessage = nl2br(escapeHtml($message));

// E-Mail-Betreff
$subject = 'Neue Kontaktanfrage von ' . $fullName;

// E-Mail-HTML
$htmlBody = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; }
        .header { color: #3b82f6; }
        .info-box { background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .message-box { background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; }
    </style>
</head>
<body>
    <h2 class="header">Neue Kontaktanfrage</h2>
    <div class="info-box">
        <p><strong>Name:</strong> ' . $safeFirstName . ' ' . $safeLastName . '</p>
        <p><strong>Unternehmen:</strong> ' . $safeCompany . '</p>
        <p><strong>E-Mail:</strong> ' . $safeEmail . '</p>
        <p><strong>Anfrage zu:</strong> ' . $safeService . '</p>
    </div>
    <div class="message-box">
        <h3 style="color: #1f2937; margin-top: 0;">Beschreibung:</h3>
        <p style="color: #4b5563;">' . $safeMessage . '</p>
    </div>
</body>
</html>
';

// E-Mail-Text (Plain Text)
$textBody = "Neue Kontaktanfrage\n\n";
$textBody .= "Name: " . $fullName . "\n";
$textBody .= "Unternehmen: " . $companyText . "\n";
$textBody .= "E-Mail: " . $email . "\n";
$textBody .= "Anfrage zu: " . $serviceLabel . "\n\n";
$textBody .= "Beschreibung:\n" . $message;

// E-Mail-Header
$to = 'Kontakt@319webdesign.com';
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";

// E-Mail senden
$mailSent = mail($to, $subject, $htmlBody, $headers);

if ($mailSent) {
    http_response_code(200);
    echo json_encode(['message' => 'E-Mail erfolgreich gesendet']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.']);
}
?>

