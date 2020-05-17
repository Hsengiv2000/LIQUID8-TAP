package com.example.taptrial.ui.visualisation

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class VisualisationViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "This is visualisation Fragment"
    }
    val text: LiveData<String> = _text
}