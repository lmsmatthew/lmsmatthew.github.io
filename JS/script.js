
const titleField = document.getElementById("title");
const descField = document.getElementById("description");
const typeField = document.getElementById("type");
const dateField = document.getElementById("date");
const timeField = document.getElementById("time");
const servicesField = document.getElementById("services");
const importantNoteField = document.getElementById("importantNote");
const languageField = document.getElementById("language");
const companyNameField = document.getElementById("companyName");
const localisationField = document.getElementById("localisation");
const emailAddressFRField = document.getElementById("emailAddressFR");
const itTeamMsgFRField = document.getElementById("itMsgFR");

const titleFieldEN = document.getElementById("titleEN");
const descFieldEN = document.getElementById("descriptionEN");
const servicesFieldEN = document.getElementById("servicesEN");
const importantNoteFieldEN = document.getElementById("importantNoteEN");
const emailAddressENField = document.getElementById("emailAddressEN");
const itTeamMsgENField = document.getElementById("itMsgEN");

const translations = {
    fr: {
        applicationTitle: "📢 Générateur d'annonces IT",
        applicationDescription: "Création rapide d'annonces IT pour Outlook.",
        language: "Langue",
        title: "Titre",
        titleEN: "Titre",
        description: "Description",
        descriptionEN: "Description",
        date: "Date",
        time: "Heure",
        services: "Services affectés",
        servicesEN: "Services affectés",
        importantNote: "Point d'attention",
        importantNoteEN: "Point d'attention",
        preview: "👀 Aperçu",
        copy: "📋 Copier vers Outlook",
        copied: "✅ HTML copié. Collez dans Outlook avec CTRL+V",
        info: "📢 Information",
        maintenance: "🔧 Maintenance",
        incident: "🚨 Incident",
        alert: "📣Alerte",
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
    en: {
        applicationTitle: "📢 IT Announcement Generator for Outlook",
        applicationDescription: "Quick IT Announcement Creation for Outlook.",
        language: "Language",
        title: "Title",
        titleEN: "Title",
        description: "Description",
        descriptionEN: "Description",
        date: "Date",
        time: "Time",
        services: "Affected Services",
        servicesEN: "Affected Services",
        importantNote: "Important note",
        importantNoteEN: "Important note",
        preview: "👀 Preview",
        copy: "📋 Copy to Outlook",
        copied: "✅ HTML copied. Paste into Outlook with CTRL+V",
        info: "📢 Information",
        maintenance: "🔧 Maintenance",
        incident: "🚨 Incident",
        alert: "📣 Alert",
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

function showToast(title, message, success = true) {

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
    }, 4000);
}

function hideToast() {
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

    switch (type) {

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

function updateLanguage() {

    let lang = languageField.value;

    document.getElementById("lblTitle").textContent =
        translations[lang].title;

    document.getElementById("lblTitleEN").textContent =
        translations[lang].titleEN;

    document.getElementById("lblApplicationTitle").textContent =
        translations[lang].applicationTitle;

    document.getElementById("lblDescription").textContent =
        translations[lang].description;

    document.getElementById("lblDescriptionEN").textContent =
        translations[lang].descriptionEN;

    document.getElementById("lblLanguage").textContent =
        translations[lang].language;

    document.getElementById("lblDate").textContent =
        translations[lang].date;

    document.getElementById("lblTime").textContent =
        translations[lang].time;

    document.getElementById("lblServices").textContent =
        translations[lang].services;

    document.getElementById("lblServicesEN").textContent =
        translations[lang].servicesEN;

    document.getElementById("lblimportantNote").textContent =
        translations[lang].importantNote;

    document.getElementById("lblimportantNoteEN").textContent =
        translations[lang].importantNoteEN;

    document.getElementById("previewTitle").textContent =
        translations[lang].preview;

    document.getElementById("copyBtn").textContent =
        translations[lang].copy;

    document.getElementById("optInfo").textContent =
        translations[lang].info;

    document.getElementById("optMaintenance").textContent =
        translations[lang].maintenance;

    document.getElementById("optIncident").textContent =
        translations[lang].incident;

    document.getElementById("optAlert").textContent =
        translations[lang].alert;

    document.getElementById("lblITMsgEN").textContent =
        translations[lang].itTeamMsgEN;

    document.getElementById("lblITMsgFR").textContent =
        translations[lang].itTeamMsgFR;

    document.getElementById("lblEmailAddressFR").textContent =
        translations[lang].emailAddressFR;

    document.getElementById("lblEmailAddressEN").textContent =
        translations[lang].emailAddressEN;

    document.getElementById("lblApplicationDescription").textContent =
        translations[lang].applicationDescription;


    document.getElementById("helpTitle").innerHTML =
        translations[lang].helpTitle;

    document.getElementById("helpContent").innerHTML =
        translations[lang].helpContent;

    renderPreview();
}

function renderPreview() {

    let title = titleField.value || "Titre";
    let desc = (descField.value || "").replace(/\n/g, "<br>");
    let date = dateField.value || "-";
    let time = timeField.value || "-";
    let companyName = companyNameField.value || "-";
    let localisation = localisationField.value || "-";
    let emailAddressFR = emailAddressFRField.value || "-";
    let emailAddressEN = emailAddressENField.value || "-";
    let itMessageFR = itTeamMsgFRField.value || "-";
    let itMessageEN = itTeamMsgENField.value || "-";



    let services = (servicesField.value || "-").replace(/\n/g, "<br>");
    let importantNote = importantNoteField.value || "-";

    let titleEN = titleFieldEN.value || "Title";
    let descEN = (descFieldEN.value || "").replace(/\n/g, "<br>");
    let servicesEN = (servicesFieldEN.value || "-").replace(/\n/g, "<br>");
    let importantNoteEN = importantNoteFieldEN.value || "-";

    let html = "";

    switch (typeField.value) {

        case "info":
            fetch("./Templates/info.html")
                .then(r => r.text())
                .then(html => {

                    html = html
                        .replaceAll("${companyName}", companyName)
                        .replaceAll("${localisation}", localisation)
                        .replaceAll("${title}", title)
                        .replaceAll("${desc}", desc)
                        .replaceAll("${emailAddressFR}", emailAddressFR)
                        .replaceAll("${titleEN}", titleEN)
                        .replaceAll("${descEN}", descEN)
                        .replaceAll("${emailAddressEN}", emailAddressEN);


                    document.getElementById("preview").innerHTML = html;
                    document.getElementById("emailHtml").innerHTML = html;
                });

            return;

        case "maintenance":
            fetch("./Templates/maintenance.html")
                .then(r => r.text())
                .then(html => {

                    html = html
                        .replaceAll("${companyName}", companyName)
                        .replaceAll("${localisation}", localisation)
                        .replaceAll("${title}", title)
                        .replaceAll("${desc}", desc)
                        .replaceAll("${importantNote}", importantNote)
                        .replaceAll("${titleEN}", titleEN)
                        .replaceAll("${descEN}", descEN)
                        .replaceAll("${importantNoteEN}", importantNoteEN);


                    document.getElementById("preview").innerHTML = html;
                    document.getElementById("emailHtml").innerHTML = html;
                });

            return;

        case "incident":
            fetch("./Templates/incident.html")
                .then(r => r.text())
                .then(html => {

                    html = html
                        .replaceAll("${companyName}", companyName)
                        .replaceAll("${localisation}", localisation)
                        .replaceAll("${title}", title)
                        .replaceAll("${desc}", desc)
                        .replaceAll("${time}", time)
                        .replaceAll("${services}", services)
                        .replaceAll("${titleEN}", titleEN)
                        .replaceAll("${descEN}", descEN)
                        .replaceAll("${servicesEN}", servicesEN);


                    document.getElementById("preview").innerHTML = html;
                    document.getElementById("emailHtml").innerHTML = html;
                });
            return;

        case "alert":
            fetch("./Templates/alert.html")
                .then(r => r.text())
                .then(html => {

                    html = html
                        .replaceAll("${companyName}", companyName)
                        .replaceAll("${localisation}", localisation)
                        .replaceAll("${title}", title)
                        .replaceAll("${desc}", desc)
                        .replaceAll("${itMessageFR}", itMessageFR)
                        .replaceAll("${titleEN}", titleEN)
                        .replaceAll("${descEN}", descEN)
                        .replaceAll("${itMessageEN}", itMessageEN);


                    document.getElementById("preview").innerHTML = html;
                    document.getElementById("emailHtml").innerHTML = html;
                });
            return;

    }

    updateHtml(html);

}

function updateHtml(html) {
    document.getElementById("preview").innerHTML = html;
    document.getElementById("emailHtml").innerHTML = html;
}

function toggleHelp() {

    const popup = document.getElementById("helpPopup");

    if (popup.style.display === "block") {

        popup.style.display = "none";

    } else {

        popup.style.display = "block";

    }
}

async function copyToOutlook() {

    renderPreview();

    const html = document.getElementById("emailHtml").innerHTML;

    try {

        await navigator.clipboard.write([
            new ClipboardItem({
                "text/html": new Blob([html], { type: "text/html" }),
                "text/plain": new Blob([html], { type: "text/plain" })
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

    } catch (e) {

        let textarea = document.createElement("textarea");
        textarea.value = html;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        alert("Contenu copié.");
    }
}

titleField.addEventListener("input", renderPreview);
descField.addEventListener("input", renderPreview);
titleFieldEN.addEventListener("input", renderPreview);
descFieldEN.addEventListener("input", renderPreview);
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
dateField.addEventListener("input", renderPreview);
timeField.addEventListener("input", renderPreview);
servicesField.addEventListener("input", renderPreview);
importantNote.addEventListener("input", renderPreview);
servicesFieldEN.addEventListener("input", renderPreview);
importantNoteEN.addEventListener("input", renderPreview);

languageField.addEventListener("change", updateLanguage);

updateLanguage();
updateFieldVisibility();
renderPreview();

