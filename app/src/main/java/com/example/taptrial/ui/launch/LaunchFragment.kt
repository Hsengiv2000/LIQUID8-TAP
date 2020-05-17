package com.example.taptrial.ui.launch

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProviders
import com.example.taptrial.R

class LaunchFragment : Fragment() {

    private lateinit var launchViewModel: LaunchViewModel

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        launchViewModel =
            ViewModelProviders.of(this).get(LaunchViewModel::class.java)
        val root = inflater.inflate(R.layout.fragment_launch, container, false)
        val textView: TextView = root.findViewById(R.id.text_launch)
        launchViewModel.text.observe(viewLifecycleOwner, Observer {
            textView.text = it
        })
        return root
    }
}