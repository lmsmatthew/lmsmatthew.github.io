const languageField = document.getElementById("language");

const titleField = document.getElementById("title");
const descField = document.getElementById("description");
const typeField = document.getElementById("type");
const dateField = document.getElementById("date");
const timeField = document.getElementById("time");
const servicesField = document.getElementById("services");
const importantNoteField = document.getElementById("importantNote");
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



let translations = {};

async function updateLanguage() {
    const lang = languageField.value;

    const response = await fetch(`./lang/${lang}.json`);
    translations = await response.json();

    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.dataset.lang;

        if (translations[key]) {
            element.textContent = translations[key];
        }
    });

    document.getElementById("helpTitle").innerHTML =
        translations.helpTitle || "";

    document.getElementById("helpContent").innerHTML =
        translations.helpContent || "";

    renderPreview();
}

languageField.addEventListener("change", updateLanguage);

updateLanguage();

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



function renderPreview() {

    let title = titleField.value || "Titre";
    let desc = (descField.value || "").replace(/\n/g, "<br>");

    let time = timeField.value || "-";
    let companyName = companyNameField.value || "-";
    let localisation = localisationField.value || "-";
    let emailAddressFR = emailAddressFRField.value || "-";
    let emailAddressEN = emailAddressENField.value || "-";
    let itMessageFR = itTeamMsgFRField.value || "-";
    let itMessageEN = itTeamMsgENField.value || "-";



    let services = (servicesField.value || "-").replace(/\n/g, "<br>");
    let importantNote = (importantNoteField.value || "-").replace(/\n/g, "<br>");

    let titleEN = titleFieldEN.value || "Title";
    let descEN = (descFieldEN.value || "").replace(/\n/g, "<br>");
    let servicesEN = (servicesFieldEN.value || "-").replace(/\n/g, "<br>");
    let importantNoteEN = (importantNoteFieldEN.value || "-").replace(/\n/g, "<br>");

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
timeField.addEventListener("input", renderPreview);
servicesField.addEventListener("input", renderPreview);
importantNote.addEventListener("input", renderPreview);
servicesFieldEN.addEventListener("input", renderPreview);
importantNoteEN.addEventListener("input", renderPreview);

languageField.addEventListener("change", updateLanguage);

updateLanguage();
updateFieldVisibility();
renderPreview();

