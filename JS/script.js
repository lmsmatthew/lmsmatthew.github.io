
const titleField=document.getElementById("title");
const descField=document.getElementById("description");
const typeField=document.getElementById("type");
const dateField=document.getElementById("date");
const timeField=document.getElementById("time");
const servicesField=document.getElementById("services");
const importantNoteField=document.getElementById("importantNote");
const languageField=document.getElementById("language");
const companyNameField = document.getElementById("companyName");
const localisationField = document.getElementById("localisation");
const emailAddressFRField = document.getElementById("emailAddressFR");
const itTeamMsgFRField = document.getElementById("itMsgFR");

const titleFieldEN=document.getElementById("titleEN");
const descFieldEN=document.getElementById("descriptionEN");
const servicesFieldEN=document.getElementById("servicesEN");
const importantNoteFieldEN=document.getElementById("importantNoteEN");
const emailAddressENField = document.getElementById("emailAddressEN");
const itTeamMsgENField = document.getElementById("itMsgEN");

const translations={
fr:{
applicationTitle:"📢 Générateur d'annonces IT",
applicationDescription: "Création rapide d'annonces IT pour Outlook.",
language:"Langue",
title:"Titre",
titleEN:"Titre",
description:"Description",
descriptionEN:"Description",
date:"Date",
time:"Heure",
services:"Services affectés",
servicesEN:"Services affectés",
importantNote:"Point d'attention",
importantNoteEN:"Point d'attention",
preview:"👀 Aperçu",
copy:"📋 Copier vers Outlook",
copied:"✅ HTML copié. Collez dans Outlook avec CTRL+V",
info:"📢 Information",
maintenance:"🔧 Maintenance",
incident:"🚨 Incident",
alert:"📣Alerte",
helpTitle: "ℹ️ Guide rapide",
emailAddressFR: "Courriel",
emailAddressEN: "Courriel",
itTeamMsgFR: "Message de l'équipe TI",
itTeamMsgEN: "Message de l'équipe TI",
helpContent: `
<p><strong>Comment utiliser l'application :</strong></p>

<ol>
<li>Sélectionnez le type d'annonce.</li>
<li>Remplissez les champs requis.</li>
<li>Visualisez le résultat dans l'aperçu.</li>
<li>Cliquez sur <strong>Copier vers Outlook</strong>.</li>
<li>Collez directement dans Outlook avec <strong>CTRL+V</strong>.</li>
</ol>

<p><strong>Types disponibles :</strong></p>

<ul>
<li>📢 Information</li>
<li>🔧 Maintenance</li>
<li>🚨 Incident</li>
<li>📣 Alerte</li>

</ul>

<p>
Les champs affichés changent automatiquement selon le type d'annonce sélectionné.
</p>

<hr>

<small>
Générateur d'annonces IT pour Outlook
</small>
`
},
en:{
applicationTitle:"📢 IT Announcement Generator for Outlook",
applicationDescription: "Quick IT Announcement Creation for Outlook.",
language:"Language",
title:"Title",
titleEN:"Title",
description:"Description",
descriptionEN:"Description",
date:"Date",
time:"Time",
services:"Affected Services",
servicesEN:"Affected Services",
importantNote:"Important note",
importantNoteEN:"Important note",
preview:"👀 Preview",
copy:"📋 Copy to Outlook",
copied:"✅ HTML copied. Paste into Outlook with CTRL+V",
info:"📢 Information",
maintenance:"🔧 Maintenance",
incident:"🚨 Incident",
alert:"📣 Alert",
helpTitle: "ℹ️ Quick Guide",
emailAddressFR: "Email Address",
emailAddressEN: "Email Address",
itTeamMsgFR: "Message from the IT Team",
itTeamMsgEN: "Message from the IT Team",
helpContent: `
<p><strong>How to use the application:</strong></p>

<ol>
<li>Select the announcement type.</li>
<li>Fill in the required fields.</li>
<li>Review the live preview.</li>
<li>Click <strong>Copy to Outlook</strong>.</li>
<li>Paste directly into Outlook using <strong>CTRL+V</strong>.</li>
</ol>

<p><strong>Available types:</strong></p>

<ul>
<li>📢 Information</li>
<li>🔧 Maintenance</li>
<li>🚨 Incident</li>
<li>📣 Alert</li>
</ul>

<p>
Visible fields automatically change based on the selected announcement type.
</p>

<hr>

<small>
IT Announcement Generator for Outlook
</small>
`
}
};

function showToast(title,message,success=true){

    const toast = document.getElementById("toast");

    toast.querySelector(".toast-title").textContent =
        title;

    toast.querySelector(".toast-message").textContent =
        message;

    toast.querySelector(".toast-icon").textContent =
        success ? "✅" : "⚠️";

    toast.style.borderLeftColor =
        success ? "#107C10" : "#ff9800";

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    },4000);
}

function hideToast(){
    document.getElementById("toast")
        .classList.remove("show");
}

function updateFieldVisibility() {

    const type = typeField.value;

    document.getElementById("dateGroup").style.display = "none";
    document.getElementById("timeGroup").style.display = "none";
    document.getElementById("servicesGroup").style.display = "none";
    document.getElementById("importantNoteGroup").style.display = "none";
	document.getElementById("importantNoteENGroup").style.display = "none";
	document.getElementById("servicesENGroup").style.display = "none";
	document.getElementById("emailFRGroup").style.display = "none";
	document.getElementById("emailENGroup").style.display = "none";
	document.getElementById("frenchGroup").style.display = "none";
	document.getElementById("englishGroup").style.display = "none";
	document.getElementById("itTeamMsgENGroup").style.display = "none";
	document.getElementById("itTeamMsgFRGroup").style.display = "none";

    switch(type) {

        case "maintenance":

			document.getElementById("importantNoteGroup").style.display = "block";
			document.getElementById("importantNoteENGroup").style.display = "block";
			document.getElementById("frenchGroup").style.display = "block";
			document.getElementById("englishGroup").style.display = "block";

            break;

        case "incident":

            document.getElementById("servicesGroup").style.display = "block";
			document.getElementById("timeGroup").style.display = "block";
			document.getElementById("servicesENGroup").style.display = "block";
			document.getElementById("frenchGroup").style.display = "block";
			document.getElementById("englishGroup").style.display = "block";
			
            break;
		case "info":
			document.getElementById("emailFRGroup").style.display = "block";
			document.getElementById("emailENGroup").style.display = "block";
			document.getElementById("frenchGroup").style.display = "block";
			document.getElementById("englishGroup").style.display = "block";
			
		break;
		
		case "alert":
			document.getElementById("frenchGroup").style.display = "block";
			document.getElementById("englishGroup").style.display = "block";
			document.getElementById("itTeamMsgFRGroup").style.display = "block";
			document.getElementById("itTeamMsgENGroup").style.display = "block";
			
		break;
    }
}

function updateLanguage(){

let lang=languageField.value;

document.getElementById("lblTitle").textContent=
translations[lang].title;

document.getElementById("lblTitleEN").textContent=
translations[lang].titleEN;

document.getElementById("lblApplicationTitle").textContent=
translations[lang].applicationTitle;

document.getElementById("lblDescription").textContent=
translations[lang].description;

document.getElementById("lblDescriptionEN").textContent=
translations[lang].descriptionEN;

document.getElementById("lblLanguage").textContent=
translations[lang].language;

document.getElementById("lblDate").textContent=
translations[lang].date;

document.getElementById("lblTime").textContent=
translations[lang].time;

document.getElementById("lblServices").textContent=
translations[lang].services;

document.getElementById("lblServicesEN").textContent=
translations[lang].servicesEN;

document.getElementById("lblimportantNote").textContent=
translations[lang].importantNote;

document.getElementById("lblimportantNoteEN").textContent=
translations[lang].importantNoteEN;

document.getElementById("previewTitle").textContent=
translations[lang].preview;

document.getElementById("copyBtn").textContent=
translations[lang].copy;

document.getElementById("optInfo").textContent=
translations[lang].info;

document.getElementById("optMaintenance").textContent=
translations[lang].maintenance;

document.getElementById("optIncident").textContent=
translations[lang].incident;

document.getElementById("optAlert").textContent=
translations[lang].alert;

document.getElementById("lblITMsgEN").textContent=
translations[lang].itTeamMsgEN;

document.getElementById("lblITMsgFR").textContent=
translations[lang].itTeamMsgFR;

document.getElementById("lblEmailAddressFR").textContent=
translations[lang].emailAddressFR;

document.getElementById("lblEmailAddressEN").textContent=
translations[lang].emailAddressEN;

document.getElementById("lblApplicationDescription").textContent=
translations[lang].applicationDescription;


document.getElementById("helpTitle").innerHTML =
    translations[lang].helpTitle;

document.getElementById("helpContent").innerHTML =
    translations[lang].helpContent;

renderPreview();
}

function renderPreview(){

let title=titleField.value || "Titre";
let desc=(descField.value || "").replace(/\n/g,"<br>");
let date=dateField.value || "-";
let time=timeField.value || "-";
let companyName=companyNameField.value || "-";
let localisation=localisationField.value || "-";
let emailAddressFR=emailAddressFRField.value || "-";
let emailAddressEN=emailAddressENField.value || "-";
let itMessageFR=itTeamMsgFRField.value || "-";
let itMessageEN=itTeamMsgENField.value || "-";



let services=(servicesField.value || "-").replace(/\n/g,"<br>");
let importantNote=importantNoteField.value || "-";

let titleEN=titleFieldEN.value || "Title";
let descEN=(descFieldEN.value || "").replace(/\n/g,"<br>");
let servicesEN=(servicesFieldEN.value || "-").replace(/\n/g,"<br>");
let importantNoteEN=importantNoteFieldEN.value || "-";

let html="";

switch(typeField.value){

case "info":

html=`
<table width="100%" cellpadding="0" cellspacing="0" border="0"
       style="background:#F5F7FA;padding:30px 15px;font-family:Segoe UI,Arial,sans-serif;">
    <tr>
        <td align="center">

            <table width="700" cellpadding="0" cellspacing="0" border="0"
                   style="max-width:700px;background:#FFFFFF;border-radius:12px;overflow:hidden;">

                <!-- Entête -->
                <tr>
                    <td style="background:#0F172A;color:#FFFFFF;padding:18px 25px;">
                        <table width="100%">
                            <tr>
                                <td>
                                    <strong>${companyName}</strong><br>
                                    Équipe TI
                                </td>
                                <td align="right" style="font-size:12px;opacity:0.85;">
                                    Communication interne - ${localisation}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <!-- Bannière information -->
                <tr>
                    <td style="background:#2563EB;color:#FFFFFF;padding:16px 25px;">
                        <table width="100%">
                            <tr>
                                <td>
                                    <strong style="font-size:18px;">
                                        ℹ️ Information importante
                                    </strong>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <!-- Contenu -->
                <tr>
                    <td style="padding:30px 25px;color:#334155;font-size:14px;line-height:1.6;">

                        <h2 style="margin-top:0;color:#0F172A;font-size:22px;">
                            ${title}
                        </h2>

                        <!-- Informations principales -->
                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                               style="margin:25px 0;background:#EFF6FF;border-left:5px solid #2563EB;border-radius:8px;">
                            <tr>
                                <td style="padding:18px;">
                                    <strong style="color:#1E40AF;">
                                        Informations concernées
                                    </strong>

                                    <div style="margin-top:10px;">
                                        ${desc}
                                    </div>
                                </td>
                            </tr>
                        </table>


                        <!-- Contact -->
                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                               style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;">
                            <tr>
                                <td style="padding:18px;">
                                    <strong>Questions ou préoccupations ?</strong><br>
                                    Communiquez avec l'équipe TI à
                                    <a href="mailto:${emailAddressFR}"
                                       style="color:#2563EB;text-decoration:none;">
                                        ${emailAddressFR}
                                    </a>
                                </td>
                            </tr>
                        </table>

                        <p style="margin-top:25px;">
                            Merci de votre collaboration.
                        </p>

                    </td>
                </tr>

                <!-- Séparateur -->
                <tr>
                    <td style="border-top:1px solid #E2E8F0;"></td>
                </tr>

                <!-- English Header -->
                <tr>
                    <td style="background:#0F172A;color:#FFFFFF;padding:18px 25px;">
                        <table width="100%">
                            <tr>
                                <td>
                                    <strong>${companyName}</strong><br>
                                    IT Team
                                </td>
                                <td align="right" style="font-size:12px;opacity:0.85;">
                                    Internal Communication - ${localisation}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <!-- Information Banner -->
                <tr>
                    <td style="background:#2563EB;color:#FFFFFF;padding:16px 25px;">
                        <table width="100%">
                            <tr>
                                <td>
                                    <strong style="font-size:18px;">
                                        ℹ️ Important Information
                                    </strong>
                                </td>
                                <td align="right" style="font-size:12px;">
                                    ${time}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <!-- English Content -->
                <tr>
                    <td style="padding:30px 25px;color:#334155;font-size:14px;line-height:1.6;">

                        <h2 style="margin-top:0;color:#0F172A;font-size:22px;">
                            ${titleEN}
                        </h2>


                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                               style="margin:25px 0;background:#EFF6FF;border-left:5px solid #2563EB;border-radius:8px;">
                            <tr>
                                <td style="padding:18px;">
                                    <strong style="color:#1E40AF;">
                                        Related Information
                                    </strong>

                                    <div style="margin-top:10px;">
                                        ${descEN}
                                    </div>
                                </td>
                            </tr>
                        </table>



                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                               style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:8px;">
                            <tr>
                                <td style="padding:18px;">
                                    <strong>Questions or concerns?</strong><br>
                                    Please contact the IT Team at
                                    <a href="mailto:${emailAddressEN}"
                                       style="color:#2563EB;text-decoration:none;">
                                        ${emailAddressEN}
                                    </a>
                                </td>
                            </tr>
                        </table>

                        <p style="margin-top:25px;">
                            Thank you for your cooperation.
                        </p>

                    </td>
                </tr>

            </table>

        </td>
    </tr>
</table>
`;
break;

case "maintenance":

html=`

<table width="100%" cellpadding="0" cellspacing="0" border="0"
style="background:#EDF2F7;padding:30px 15px;font-family:Segoe UI,Arial,sans-serif;">
<tr>
<td align="center">

<table width="700" cellpadding="0" cellspacing="0" border="0"
style="max-width:700px;background:#FFFFFF;border-radius:12px;overflow:hidden;">

    <!-- Entête -->
    <tr>
        <td style="background:#1E293B;color:#FFFFFF;padding:18px 25px;">
            <table width="100%">
                <tr>
                    <td>
                        <strong>${companyName}</strong><br>
                        Équipe TI - IT Team
                    </td>
                    <td align="right" style="font-size:12px;opacity:0.85;">
                        ${localisation}
                    </td>
                </tr>
            </table>
        </td>
    </tr>

    <!-- Bannière -->
    <tr>
        <td style="background:#D97706;color:#FFFFFF;padding:16px 25px;">
            <strong style="font-size:18px;">
                🔧 MAINTENANCE PLANIFIÉE - SCHEDULED MAINTENANCE
            </strong>
        </td>
    </tr>

    <!-- Section Française -->
    <tr>
        <td style="padding:30px 25px;color:#1E293B;font-size:14px;line-height:1.6;">

            <h2 style="margin-top:0;color:#0F172A;font-size:22px;">
                ${title}
            </h2>

            <table width="100%" cellpadding="0" cellspacing="0" border="0"
            style="margin:25px 0;background:#E0F2FE;border-left:5px solid #0284C7;border-radius:8px;">
                <tr>
                    <td style="padding:18px;">
                        <strong style="color:#0369A1;">
                            Français
                        </strong>

                        <div style="margin-top:10px;">
                            ${desc}
                        </div>
                    </td>
                </tr>
            </table>

            <table width="100%" cellpadding="0" cellspacing="0" border="0"
            style="margin:25px 0;background:#FED7AA;border-left:5px solid #EA580C;border-radius:8px;">
                <tr>
                    <td style="padding:18px;">
                        <strong style="color:#9A3412;">
                            ⚠️ Point d'attention
                        </strong>

                        <div style="margin-top:10px;">
                            ${importantNote}
                        </div>
                    </td>
                </tr>
            </table>

            <table width="100%" cellpadding="0" cellspacing="0" border="0"
            style="background:#F1F5F9;border:1px solid #CBD5E1;border-radius:8px;">
                <tr>
                    <td style="padding:18px;">
                        Si vous constatez un comportement inattendu, nous vous invitons
                        à soumettre un billet au support informatique.
                        Vos demandes seront traitées en priorité.
                    </td>
                </tr>
            </table>

        </td>
    </tr>

    <!-- Séparateur -->
    <tr>
        <td style="border-top:1px solid #CBD5E1;"></td>
    </tr>

    <!-- Section Anglaise -->
    <tr>
        <td style="padding:30px 25px;color:#1E293B;font-size:14px;line-height:1.6;">

            <h2 style="margin-top:0;color:#0F172A;font-size:22px;">
                ${titleEN}
            </h2>

            <table width="100%" cellpadding="0" cellspacing="0" border="0"
            style="margin:25px 0;background:#E0F2FE;border-left:5px solid #0284C7;border-radius:8px;">
                <tr>
                    <td style="padding:18px;">
                        <strong style="color:#0369A1;">
                            English
                        </strong>

                        <div style="margin-top:10px;">
                            ${descEN}
                        </div>
                    </td>
                </tr>
            </table>

            <table width="100%" cellpadding="0" cellspacing="0" border="0"
            style="margin:25px 0;background:#FED7AA;border-left:5px solid #EA580C;border-radius:8px;">
                <tr>
                    <td style="padding:18px;">
                        <strong style="color:#9A3412;">
                            ⚠️ Important Note
                        </strong>

                        <div style="margin-top:10px;">
                            ${importantNoteEN}
                        </div>
                    </td>
                </tr>
            </table>

                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
            style="background:#F1F5F9;border:1px solid #CBD5E1;border-radius:8px;">
                <tr>
                    <td style="padding:18px;">
                        If you encounter unexpected behavior, please submit a ticket to IT support.
						Your requests will be treated as a priority.
                    </td>
                </tr>
            </table>
`;
break;

case "incident":

html=`
<table width="100%" cellpadding="0" cellspacing="0" border="0"
style="background:#F5F7FA;padding:30px 15px;font-family:Segoe UI,Arial,sans-serif;">
<tr>
<td align="center">

<table width="700" cellpadding="0" cellspacing="0" border="0"
style="max-width:700px;background:#FFFFFF;border-radius:12px;overflow:hidden;">

<!-- Entête FR -->
<tr>
<td style="background:#0F172A;color:#FFFFFF;padding:18px 25px;">
<table width="100%">
<tr>
<td>
<strong>${companyName}</strong><br>
Équipe TI
</td>
<td align="right" style="font-size:12px;opacity:0.85;">
Communication d'incident - ${localisation}
</td>
</tr>
</table>
</td>
</tr>

<!-- Bannière Incident -->
<tr>
<td style="background:#DC2626;color:#FFFFFF;padding:16px 25px;">
<table width="100%">
<tr>
<td>
<strong style="font-size:18px;">
🚨 Incident en cours
</strong>
</td>
<td align="right" style="font-size:12px;">
Détecté à : ${time}
</td>
</tr>
</table>
</td>
</tr>

<!-- Contenu FR -->
<tr>
<td style="padding:30px 25px;color:#334155;font-size:14px;line-height:1.6;">

<h2 style="margin-top:0;color:#0F172A;font-size:22px;">
${title}
</h2>

<p>
${desc}
</p>

<!-- Statut -->
<table width="100%" cellpadding="0" cellspacing="0" border="0"
style="margin:25px 0;background:#FEF2F2;border-left:5px solid #DC2626;border-radius:8px;">
<tr>
<td style="padding:18px;">
<strong style="color:#991B1B;">
Statut actuel
</strong>
<div style="margin-top:10px;">
En cours de résolution par notre équipe
</div>
</td>
</tr>
</table>

<!-- Services impactés -->
<table width="100%" cellpadding="0" cellspacing="0" border="0"
style="margin:25px 0;background:#FFF7ED;border-left:5px solid #EA580C;border-radius:8px;">
<tr>
<td style="padding:18px;">
<strong style="color:#C2410C;">
Services impactés
</strong>
<div style="margin-top:10px;">
${services}
</div>
</td>
</tr>
</table>

<!-- Message TI -->
<table width="100%" cellpadding="0" cellspacing="0" border="0"
style="margin:25px 0;background:#F8FAFC;border-left:5px solid #64748B;border-radius:8px;">
<tr>
<td style="padding:18px;">
<strong>Message de l'équipe TI</strong>
<div style="margin-top:10px;">
Notre équipe travaille activement à la résolution de cet incident.
Nous communiquerons des mises à jour dès que de nouvelles informations seront disponibles.
</div>
</td>
</tr>
</table>


<p style="margin-top:25px;">
Merci de votre compréhension.
</p>

</td>
</tr>

<!-- Séparateur -->
<tr>
<td style="border-top:1px solid #E2E8F0;"></td>
</tr>

<!-- Entête EN -->
<tr>
<td style="background:#0F172A;color:#FFFFFF;padding:18px 25px;">
<table width="100%">
<tr>
<td>
<strong>${companyName}</strong><br>
IT Team
</td>
<td align="right" style="font-size:12px;opacity:0.85;">
Incident Communication - ${localisation}
</td>
</tr>
</table>
</td>
</tr>

<!-- Bannière EN -->
<tr>
<td style="background:#DC2626;color:#FFFFFF;padding:16px 25px;">
<table width="100%">
<tr>
<td>
<strong style="font-size:18px;">
🚨 Ongoing Incident
</strong>
</td>
<td align="right" style="font-size:12px;">
Detected at: ${time}
</td>
</tr>
</table>
</td>
</tr>

<!-- Contenu EN -->
<tr>
<td style="padding:30px 25px;color:#334155;font-size:14px;line-height:1.6;">

<h2 style="margin-top:0;color:#0F172A;font-size:22px;">
${titleEN}
</h2>

<p>
${descEN}
</p>

<!-- Status -->
<table width="100%" cellpadding="0" cellspacing="0" border="0"
style="margin:25px 0;background:#FEF2F2;border-left:5px solid #DC2626;border-radius:8px;">
<tr>
<td style="padding:18px;">
<strong style="color:#991B1B;">
Current Status
</strong>
<div style="margin-top:10px;">
Being resolved by our team
</div>
</td>
</tr>
</table>

<!-- Impacted Services -->
<table width="100%" cellpadding="0" cellspacing="0" border="0"
style="margin:25px 0;background:#FFF7ED;border-left:5px solid #EA580C;border-radius:8px;">
<tr>
<td style="padding:18px;">
<strong style="color:#C2410C;">
Impacted Services
</strong>
<div style="margin-top:10px;">
${servicesEN}
</div>
</td>
</tr>
</table>

<!-- IT Message -->
<table width="100%" cellpadding="0" cellspacing="0" border="0"
style="margin:25px 0;background:#F8FAFC;border-left:5px solid #64748B;border-radius:8px;">
<tr>
<td style="padding:18px;">
<strong>Message from the IT Team</strong>
<div style="margin-top:10px;">
Our team is actively working to resolve this incident.
Updates will be communicated as soon as additional information becomes available.
</div>
</td>
</tr>
</table>


<p style="margin-top:25px;">
Thank you for your understanding.
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>
						
						
`;
break;

case "alert":

html=`
<table width="100%" cellpadding="0" cellspacing="0" border="0"
style="background:#F5F7FA;padding:30px 15px;font-family:Segoe UI,Arial,sans-serif;">
<tr>
<td align="center">

<table width="700" cellpadding="0" cellspacing="0" border="0"
style="max-width:700px;background:#FFFFFF;border-radius:12px;overflow:hidden;">

<!-- Entête FR -->
<tr>
<td style="background:#0F172A;color:#FFFFFF;padding:18px 25px;">
<table width="100%">
<tr>
<td>
<strong>${companyName}</strong><br>
Équipe TI
</td>
<td align="right" style="font-size:12px;opacity:0.85;">
Communication d'alerte - ${localisation}
</td>
</tr>
</table>
</td>
</tr>	

<!-- Bannière Incident -->
<tr>
<td style="background:#DC2626;color:#FFFFFF;padding:16px 25px;">
<table width="100%">
<tr>
<td>
<strong style="font-size:18px;">
📣 Alerte
</strong>
</td>

</tr>
</table>
</td>
</tr>

<!-- Contenu FR -->
<tr>
<td style="padding:30px 25px;color:#334155;font-size:14px;line-height:1.6;">

<h2 style="margin-top:0;color:#0F172A;font-size:22px;">
${title}
</h2>

<p>
${desc}
</p>


<!-- Message TI -->
<table width="100%" cellpadding="0" cellspacing="0" border="0"
style="margin:25px 0;background:#F8FAFC;border-left:5px solid #64748B;border-radius:8px;">
<tr>
<td style="padding:18px;">
<strong>Message de l'équipe TI</strong>
<div style="margin-top:10px;">

${itMessageFR}

</div>
</td>
</tr>
</table>


<p style="margin-top:25px;">
Merci de votre compréhension.
</p>

</td>
</tr>

<!-- Séparateur -->
<tr>
<td style="border-top:1px solid #E2E8F0;"></td>
</tr>

<!-- Entête EN -->
<tr>
<td style="background:#0F172A;color:#FFFFFF;padding:18px 25px;">
<table width="100%">
<tr>
<td>
<strong>${companyName}</strong><br>
IT Team
</td>
<td align="right" style="font-size:12px;opacity:0.85;">
Alert Communication - ${localisation}
</td>
</tr>
</table>
</td>
</tr>

<!-- Bannière EN -->
<tr>
<td style="background:#DC2626;color:#FFFFFF;padding:16px 25px;">
<table width="100%">
<tr>
<td>
<strong style="font-size:18px;">
📣 Alert
</strong>
</td>

</tr>
</table>
</td>
</tr>

<!-- Contenu EN -->
<tr>
<td style="padding:30px 25px;color:#334155;font-size:14px;line-height:1.6;">

<h2 style="margin-top:0;color:#0F172A;font-size:22px;">
${titleEN}
</h2>

<p>
${descEN}
</p>


<!-- IT Message -->
<table width="100%" cellpadding="0" cellspacing="0" border="0"
style="margin:25px 0;background:#F8FAFC;border-left:5px solid #64748B;border-radius:8px;">
<tr>
<td style="padding:18px;">
<strong>Message from the IT Team</strong>
<div style="margin-top:10px;">

${itMessageEN}

</div>
</td>
</tr>
</table>


<p style="margin-top:25px;">
Thank you for your understanding.
</p>

</td>
</tr>

</table>

</td>
</tr>
</table>
						
						
`;
break;
}

document.getElementById("preview").innerHTML=html;
document.getElementById("emailHtml").innerHTML=html;

}

function toggleHelp(){

    const popup = document.getElementById("helpPopup");

    if (popup.style.display === "block") {

        popup.style.display = "none";

    } else {

        popup.style.display = "block";

    }
}

async function copyToOutlook(){

renderPreview();

const html=document.getElementById("emailHtml").innerHTML;

try{

await navigator.clipboard.write([
new ClipboardItem({
"text/html":new Blob([html],{type:"text/html"}),
"text/plain":new Blob([html],{type:"text/plain"})
})
]);

showToast(
    languageField.value === "fr"
        ? "Copié avec succès"
        : "Successfully copied",

    languageField.value === "fr"
        ? "Le contenu HTML est prêt à être collé dans Outlook."
        : "The HTML content is ready to be pasted into Outlook."
);

}catch(e){

let textarea=document.createElement("textarea");
textarea.value=html;
document.body.appendChild(textarea);
textarea.select();
document.execCommand("copy");
document.body.removeChild(textarea);

alert("Contenu copié.");
}
}

titleField.addEventListener("input",renderPreview);
descField.addEventListener("input",renderPreview);
titleFieldEN.addEventListener("input",renderPreview);
descFieldEN.addEventListener("input",renderPreview);
companyNameField.addEventListener("input", renderPreview);
localisationField.addEventListener("input", renderPreview);
emailAddressFRField.addEventListener("input", renderPreview);
emailAddressENField.addEventListener("input", renderPreview);
itTeamMsgFRField.addEventListener("input", renderPreview);
itTeamMsgENField.addEventListener("input", renderPreview);
typeField.addEventListener("change", () => {

    updateFieldVisibility();
    renderPreview();

});
dateField.addEventListener("input",renderPreview);
timeField.addEventListener("input",renderPreview);
servicesField.addEventListener("input",renderPreview);
importantNote.addEventListener("input",renderPreview);
servicesFieldEN.addEventListener("input",renderPreview);
importantNoteEN.addEventListener("input",renderPreview);

languageField.addEventListener("change",updateLanguage);

updateLanguage();
updateFieldVisibility();
renderPreview();

