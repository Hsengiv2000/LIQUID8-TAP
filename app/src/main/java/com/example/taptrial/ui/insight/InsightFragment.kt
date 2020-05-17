package com.example.taptrial.ui.insight

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProviders
import com.example.taptrial.R

class InsightFragment : Fragment() {

    private lateinit var insightViewModel: InsightViewModel

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        insightViewModel =
            ViewModelProviders.of(this).get(InsightViewModel::class.java)
        val root = inflater.inflate(R.layout.fragment_insights, container, false)
        val textView: TextView = root.findViewById(R.id.text_insight)
        insightViewModel.text.observe(viewLifecycleOwner, Observer {
            textView.text = it
        })
        return root
    }
}
