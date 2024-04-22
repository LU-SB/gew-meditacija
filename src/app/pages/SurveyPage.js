"use client";
import React from "react";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { themeJson } from "../utils/survey_theme";


const surveyJson = {
  pages: [
    {
      name: "page1",
      title: "Lūdzu sniedziet atbildes par sevi!",
      elements: [
        {
          name: "response_time",
          title: "Emocijas atzīmēju:",
          isRequired: true,
          type: "radiogroup",
          choices: [
            "Pirms meditācijas",
            "Pēc meditācijas",
          ],
          showOtherItem: true,
          otherPlaceholder: {
            default: "",
          },
          otherText: {
            default: "Cits",
          },
        },
        {
          name: "age",
          title: "Vecums",
          type: "text",
          inputType: "number",
          isRequired: true,
        },
        {
          name: "gender",
          title: "Dzimums",
          type: "radiogroup",
          isRequired: true,
          choices: ["Sieviete", "Vīrietis"],
        },
        {
          visibleIf:
            "{response_time} = 'Pēc meditācijas'",
          type: "rating",
          name: "dark_light",
          title: "Novērtējiet telpu, kurā veicāt meditāciju!",
          isRequired: true,
          minRateDescription: "Tumša",
          maxRateDescription: "Gaiša",
          rateCount: 7,
          rateMax: 7,
          displayMode: "buttons",
          rateDescriptionLocation: "bottom",
        },
        {
          visibleIf:
            "{response_time} = 'Pēc meditācijas'",
          type: "rating",
          name: "cold_warm",
          title: " ",
          isRequired: true,
          minRateDescription: "Vēsa",
          maxRateDescription: "Silta",
          rateCount: 7,
          rateMax: 7,
          displayMode: "buttons",
          rateDescriptionLocation: "bottom",
        },
        {
          visibleIf:
            "{response_time} = 'Pēc meditācijas'",
          type: "rating",
          name: "noisy_quiet",
          title: " ",
          isRequired: true,
          minRateDescription: "Trokšņaina",
          maxRateDescription: "Klusa",
          rateCount: 7,
          rateMax: 7,
          displayMode: "buttons",
          rateDescriptionLocation: "bottom",
        },
        {
          visibleIf:
            "{response_time} = 'Pēc meditācijas'",
          type: "rating",
          name: "disturbing_calm",
          title: " ",
          isRequired: true,
          minRateDescription: "Satraucoša",
          maxRateDescription: "Mierīga",
          rateCount: 7,
          rateMax: 7,
          displayMode: "buttons",
          rateDescriptionLocation: "bottom",
        },
        {
          visibleIf:
            "{response_time} = 'Pēc meditācijas'",
          type: "rating",
          name: "messy_orderly",
          title: " ",
          isRequired: true,
          minRateDescription: "Nekārtīga",
          maxRateDescription: "Kārtīga",
          rateCount: 7,
          rateMax: 7,
          displayMode: "buttons",
          rateDescriptionLocation: "bottom",
        },
        {
          visibleIf:
            "{response_time} = 'Pēc meditācijas'",
          type: "rating",
          name: "nature",
          title: " ",
          isRequired: true,
          minRateDescription: "Daba nav klātesoša",
          maxRateDescription: "Daba ir klātesoša",
          rateCount: 7,
          rateMax: 7,
          displayMode: "buttons",
          rateDescriptionLocation: "bottom",
        },
        {
          visibleIf:
            "{response_time} = 'Pēc meditācijas'",
          type: "rating",
          name: "narrow_wide",
          title: " ",
          isRequired: true,
          minRateDescription: "Šaura",
          maxRateDescription: "Plaša",
          rateCount: 7,
          rateMax: 7,
          displayMode: "buttons",
          rateDescriptionLocation: "bottom",
        },
        {
          visibleIf:
            "{response_time} = 'Pēc meditācijas'",
          type: "rating",
          name: "small_large",
          title: " ",
          isRequired: true,
          minRateDescription: "Maza",
          maxRateDescription: "Liela",
          rateCount: 7,
          rateMax: 7,
          displayMode: "buttons",
          rateDescriptionLocation: "bottom",
        },
        {
          visibleIf:
            "{response_time} = 'Pēc meditācijas'",
          type: "rating",
          name: "symmetrical_asymmetrical",
          title: " ",
          isRequired: true,
          minRateDescription: "Nesimetriska",
          maxRateDescription: "Simetriska",
          rateCount: 7,
          rateMax: 7,
          displayMode: "buttons",
          rateDescriptionLocation: "bottom",
        },
        {
          visibleIf:
            "{response_time} = 'Pēc meditācijas'",
          type: "rating",
          name: "sunny",
          title: " ",
          isRequired: true,
          minRateDescription: "Ēnaina",
          maxRateDescription: "Saulaina",
          rateCount: 7,
          rateMax: 7,
          displayMode: "buttons",
          rateDescriptionLocation: "bottom",
        },
        {
          visibleIf: "{response_time} = 'Pēc meditācijas'",
          type: "html",
          html: "<p>Atzīmējiet visu, kas atbilst telpai, kurā meditējāt!</p>"
        },
        {
          visibleIf:
            "{response_time} = 'Pēc meditācijas'",
          name: "room_shape",
          title: "Telpas foma:",
          isRequired: true,
          type: "checkbox",
          choices: ["četrstūrīga", "apaļīga", "simetriska", "proporcionāla", "āra vide","augsti griesti", "zemi griesti", "regulāra", "noapaļoti stūri", "lieli logi"],
          showOtherItem: true,
          otherPlaceholder: {
            default: "",
          },
          otherText: {
            default: "Cits",
          },
        },
        {
          visibleIf:
            "{response_time} = 'Pēc meditācijas'",
          name: "color",
          title: "Telpā dominējošā krāsa:",
          isRequired: true,
          type: "checkbox",
          choices: ["balta", "zaļa", "dzeltena", "bēša", "brūna", "sarkana", "zila",  "raibs"],
          showOtherItem: true,
          otherPlaceholder: {
            default: "",
          },
          otherText: {
            default: "Cits",
          },
        },
        {
          visibleIf:
            "{response_time} = 'Pēc meditācijas'",
          name: "material",
          title: "Telpā dominējošais materiāls:",
          isRequired: true,
          type: "checkbox",
          choices: [ "koks", "plastmasa", "tekstils", "betons", "metāls"],
          showOtherItem: true,
          otherPlaceholder: {
            default: "",
          },
          otherText: {
            default: "Cits",
          },
        },
        {
          visibleIf:
          "{response_time} = 'Pēc meditācijas'",
          name: "number_of_participants",
          title: "Cik cilvēki piedalījās nodarbībā:",
          type: "radiogroup",
          isRequired: true,
          choices: ["viens", "grupa līdz 10", "10-20", "20'+'"],
        },
        {
          visibleIf:
            "{response_time} = 'Pēc meditācijas'",
          type: "rating",
          name: "rating_disturbing_calm",
          title: "Lūdzu novērtējiet savu veikto meditāciju!",
          isRequired: true,
          minRateDescription: "Satraucoša",
          maxRateDescription: "Mierīga",
          rateCount: 7,
          rateMax: 7,
          displayMode: "buttons",
          rateDescriptionLocation: "bottom",
        },
        {
          visibleIf:
            "{response_time} = 'Pēc meditācijas'",
          type: "rating",
          name: "rating_easy_to_focus",
          title: " ",
          isRequired: true,
          minRateDescription: "Grūti koncentrēties",
          maxRateDescription: "Viegli koncentrēties",
          rateCount: 7,
          rateMax: 7,
          displayMode: "buttons",
          rateDescriptionLocation: "bottom",
        },
        {
          visibleIf:
            "{response_time} = 'Pēc meditācijas'",
          type: "rating",
          name: "rating_interrupted_uninterrupted",
          title: " ",
          isRequired: true,
          minRateDescription: "Pārtraukta",
          maxRateDescription: "Nepārtraukta",
          rateCount: 7,
          rateMax: 7,
          displayMode: "buttons",
          rateDescriptionLocation: "bottom",
        },
        {
          visibleIf:
            "{response_time} = 'Pēc meditācijas'",
          type: "rating",
          name: "rating_failed_successful",
          title: " ",
          isRequired: true,
          minRateDescription: "Neizdevusies",
          maxRateDescription: "Izdevusies",
          rateCount: 7,
          rateMax: 7,
          displayMode: "buttons",
          rateDescriptionLocation: "bottom",
        },
        {
          visibleIf:
          "{response_time} = 'Pēc meditācijas'",
          name: "comments",
          title: "Radušies papildus komentāri:",
          type: "text",
          isRequired: false,
        },
      ],
    },
  ],
  completeText: "Iesniegt",
  completedHtml: "Paldies par dalību!",
  showQuestionNumbers: "off",
  showPrevButton: false,
  firstPageIsStarted: true,
};

const customCss = {
  completedPage: "main",
};

export default function SurveyPage({ setPage, postData }) {
  const survey = new Model(surveyJson);
  survey.applyTheme(themeJson);
  survey.css = customCss;

  survey.onComplete.add((sender, options) => {
    options.showSaveInProgress("Saglabā...");
    postData(sender.data).then((result) => {
      if (result.success) {
        options.showSaveSuccess("Saglabāts!");
      } else {
        options.showSaveError("Neizdevās saglabāt!");
      }
    });
  });

  survey.onErrorCustomText.add(function (sender, options) {
    if (options.name == "required") {
      options.text = "Atbilde ir obligāta!";
    }
  });

  return <Survey model={survey} />;
}
