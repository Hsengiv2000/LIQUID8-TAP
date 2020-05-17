package com.example.taptrial.ui.insight

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class InsightViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "This is insight Fragment"
    }
    val text: LiveData<String> = _text
}