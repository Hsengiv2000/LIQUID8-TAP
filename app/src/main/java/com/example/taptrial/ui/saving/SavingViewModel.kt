package com.example.taptrial.ui.saving

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class SavingViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "This is saving Fragment"
    }
    val text: LiveData<String> = _text
}