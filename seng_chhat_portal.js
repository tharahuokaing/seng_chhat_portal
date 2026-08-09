/* =========================================================
   EXECUTIVE PORTAL CONTROLLER - MR. SENG CHHAT & EXTENDED AI VOICE
========================================================= */

(() => {
    "use strict";

    const SengChhatPortal = {
        syncNodes: function() {
            console.log("[EXECUTIVE PORTAL]: Synchronizing Huokaing Thara ISP & Bank Ecosystem nodes...");
            alert("Director Seng Chhat: All network nodes and bank liquidity registers successfully re-synchronized.");
        },

        speakAnnouncement: function(lang) {
            if (!('speechSynthesis' in window)) {
                alert("Text-to-speech synchronization is not supported by your browser.");
                return;
            }

            // Cancel any ongoing speech
            window.speechSynthesis.cancel();

            let textToSpeak = "";
            let speechLang = "en-US";

            if (lang === 'km') {
                speechLang = "km-KH";
                textToSpeak = "សូមគោរពជូនដំណឹងដល់កិច្ចប្រជុំថ្នាក់ដឹកនាំ និងបុគ្គលិកទាំងអស់។ ក្រោមការដឹកនាំដ៏ខ្ពង់ខ្ពស់របស់ លោក សេង ឆាត នាយកនៃប្រព័ន្ធអ៊ីនធឺណិត និងធនាគារ ហួត កាយ៉ា ឥឡូវនេះយើងសូមធ្វើរបាយការណ៍បច្ចុប្បន្នភាពប្រព័ន្ធទាំងមូលដូចតទៅ៖ " +
                              "ទីមួយ គឺប្រព័ន្ធបណ្តាញអ៊ីនធឺណិត ISP គឺដំណើរការដោយរលូន គ្មានការរអាក់រអួលជាមួយនឹងកម្រិតល្បឿនអុបទិកកម្រិតខ្ពស់។ " +
                              "ទីពីរ គឺប្រព័ន្ធធនាគារទីមួយ និងទីពីរ កំពុងរក្សាតុល្យភាពទឹកប្រាក់បម្រុងយ៉ាងមានសុវត្ថិភាព តាមរយៈប្រព័ន្ធទូទាត់បាគង និងស្វ៊ីហ្វ។ " +
                              "ទីបី គឺសុវត្ថិភាពប្រព័ន្ធបណ្តាញអ៊ីនធឺណិតត្រូវបានការពារយ៉ាងតឹងរឹងដោយក្រុមការងារជំនាញ។ " +
                              "សូមអរគុណ!";
            } else {
                speechLang = "en-US";
                textToSpeak = "Attention all meeting participants and executive board members. Under the esteemed leadership of Mr. Seng Chhat, Director of Huokaing Thara Internet Service Provider and banking system infrastructure, we are presenting the comprehensive system status report. " +
                              "First, all core ISP network nodes, including the Bakong gateway hub and subsea fiber backbones, are operating at peak optimal performance with ninety-nine point ninety-nine percent uptime. " +
                              "Second, Bank one and Bank two cross-network liquidity pools and financial transaction ledgers are fully synchronized, secure, and balanced. " +
                              "Third, cybersecurity monitoring protocols are active across all servers to prevent unauthorized intrusions. " +
                              "Thank you for your dedication to operational excellence.";
            }

            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            utterance.lang = speechLang;
            utterance.rate = 0.90; // Slower, professional pacing for extended meeting broadcasts
            utterance.pitch = 1.0;

            window.speechSynthesis.speak(utterance);
            console.log(`[AI VOICE MEETING]: Broadcasting extended announcement in ${lang.toUpperCase()}`);
        }
    };

    window.SengChhatPortal = SengChhatPortal;

    document.addEventListener("DOMContentLoaded", () => {
        console.log("[EXECUTIVE PORTAL LOADED]: Initialized for Director Seng Chhat with Extended AI Voice support.");
    });
})();
