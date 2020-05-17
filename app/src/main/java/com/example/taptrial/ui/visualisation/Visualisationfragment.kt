package com.example.taptrial.ui.visualisation

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProviders
import com.example.taptrial.R

class Visualisationfragment : Fragment() {

    private lateinit var visualisationViewModel: VisualisationViewModel

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        visualisationViewModel =
            ViewModelProviders.of(this).get(VisualisationViewModel::class.java)
        val root = inflater.inflate(R.layout.fragment_visualisation, container, false)
        val textView: TextView = root.findViewById(R.id.text_visualisation)
        visualisationViewModel.text.observe(viewLifecycleOwner, Observer {
            textView.text = it
        })
        return root
    }
}