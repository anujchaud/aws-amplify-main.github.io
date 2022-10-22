import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';


Amplify.configure(awsconfig);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                
                <>
                <canvas id="input-canvas"></canvas>
                <canvas id="overlay-canvas"></canvas>
                <video id="webcam-video" preload="auto" loop playsinline autoplay></video>
                <script src="./dlib/dlib-wasm-test.js"></script>
                <script src="./dlib/dlib-wasm-test-js.js"></script>
                </>
                <AmplifySignOut />
            </header>
        </div>
    );
}

export default withAuthenticator(App);