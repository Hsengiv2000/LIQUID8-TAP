package com.example.taptrial.ui.saving

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProviders
import com.android.volley.Request
import com.android.volley.Response
import com.android.volley.Response.Listener
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley
import com.example.taptrial.R

class SavingFragment : Fragment() {

    private lateinit var savingViewModel: SavingViewModel

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        savingViewModel =
            ViewModelProviders.of(this).get(SavingViewModel::class.java)
        val root = inflater.inflate(R.layout.fragment_savings, container, false)
        val textView: TextView = root.findViewById(R.id.text_saving)
        savingViewModel.text.observe(viewLifecycleOwner, Observer {
            textView.text = it
        })

        val t = Toast.makeText(context, "a", Toast.LENGTH_LONG)
        t.show()

        val queue = Volley.newRequestQueue(context)

       //     Thread.sleep(1000);
        val url = "http://192.168.1.114:3000/savings?id=OWVH344"

// Request a string response from the provided URL.

        val stringRequest = StringRequest(
            Request.Method.GET, url,
            Listener<String> { response ->
                run {
                    Log.i("hey", response.toString())
                    // Display the first 500 characters of the response string.
                    this.activity?.runOnUiThread( Runnable {
                        textView.text =  response.toString();

                    })
                 //   Toast.makeText(context, "Response is: ${response.substring(0, 500)}", Toast.LENGTH_LONG).show();
                }
            },
            Response.ErrorListener { textView.text = "That didn't work!" })

// Add the request to the RequestQueue.
        queue.add(stringRequest)
        return root
    }
}