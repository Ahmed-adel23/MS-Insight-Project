# MS insight: 
An Intelligent Diagnostic Assistant Harnessing AI for Early Detection and Comprehensive Management of Multiple Sclerosis.

## About MS insight project
Detection and classification of diseases frequently relies on manual assessment by specialists across various medical fields. Consequently, the diagnostic process and monitoring of disease progression tend to be meticulous yet time-consuming. However, certain diseases, such as multiple sclerosis (MS), present formidable hurdles due to the imperative of timely diagnosis. Delayed detection of MS can lead to grave repercussions for patients, underscoring the need for innovative solutions to aid in early detection. The objective of this paper is to propose a mobile phone-based system designed to facilitate the early and accurate diagnosis of MS. Leveraging advancements in technology, our system aims to empower healthcare professionals, including newly graduated doctors, with tools to detect MS efficiently and reliably. By providing accessible and user-friendly diagnostic capabilities on a mobile platform, our system seeks to enhance the sensitivity and speed of MS diagnosis, thereby improving patient outcomes and quality of care. Through the integration of cutting-edge algorithms and medical knowledge, our proposed system represents a promising step towards addressing the diagnostic challenges associated with MS.

## Problems: 
The problem of delayed diagnosis in Multiple Sclerosis (MS) is multifaceted, presenting significant challenges in the healthcare landscape. One key aspect is the complex nature of MS itself, characterized by a wide range of symptoms and varying progression among individuals. This complexity poses a challenge for healthcare professionals, particularly those less experienced in neurology, making early and accurate diagnosis a formidable task so MS diagnosis often involves a prolonged process, including multiple tests and consultations, leading to delays in initiating appropriate treatment.


## Solution: 
### Our Solution: MS insight 
MS insight is a comprehensive, patient-focused app that offers an innovative approach to MS diagnosis and management.It leverages advanced artificial intelligence and machine learning algorithms to provide accurate and efficient diagnosis results, providing them with treatment recommendations.The diagnostic test results obtained through our app assist healthcare professionals in confirming their diagnosis.Our app provides a diagnosis within minutes, enabling early intervention and improved patient outcomes. It's a game-changer in the world of healthcare.

## Software Architecture
The application is divided into three parts, the client, the server and Deep Learning models.Following the technologies used to develop the application:

### Frontend Development with React Native
React Native was a popular choice for building mobile applications due to its cross-platform capabilities and efficiency in creating native-like experiences. For the MS insight app, the frontend was developed using React Native to ensure compatibility with both iOS and Android devices.

### Backend Development for API: 
The backend of the MS insight app was responsible for processing user input, interfacing with Deep learning models, and providing the necessary data to the frontend. It was built using the Flask framework (Python) to create a RESTful API.
### Integration of Deep learning Models
Artificial intelligence plays a central role in the MS insight app, as it enables the prediction and diagnosis of MS based on user input. The machine learning models will be trained using a dataset containing relevant features and corresponding MS labels. These models will then be integrated into the backend to enable real-time predictions.

## Getting Started
### for the client side :
<ol>
    <li>
        Open MS-App folder
    </li>
    <li>
      Use - npm i  to install package
    </li>
    <li>
      Run app by -  npx expo start 
    </li>
  </ol>
  
### for the server side : 
<ol>
    <li>
        Open MS Backend (API) folder
    </li>
    <li>
        Use pip install -r requirements.txt  to install package 
    </li>
    <li>
        Run server by - python app.py 
    </li>
  </ol>
  
