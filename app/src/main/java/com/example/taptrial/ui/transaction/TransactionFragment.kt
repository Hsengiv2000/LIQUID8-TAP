package com.example.taptrial.ui.transaction

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProviders
import com.android.volley.Request
import com.android.volley.Response
import com.android.volley.toolbox.StringRequest
import com.android.volley.toolbox.Volley
import com.example.taptrial.R

class TransactionFragment : Fragment() {

    private lateinit var transactionViewModel: TransactionViewModel

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        transactionViewModel =
            ViewModelProviders.of(this).get(TransactionViewModel::class.java)
        val root = inflater.inflate(R.layout.fragment_transaction, container, false)
        val textView: TextView = root.findViewById(R.id.text_transaction)
        val amount: EditText = root.findViewById(R.id.amount);
        val goal: EditText = root.findViewById(R.id.goal);
        val button: Button = root.findViewById(R.id.button3);
        button.setOnClickListener{

            Toast.makeText(context, amount.text.toString()+goal.text.toString() , Toast.LENGTH_LONG).show();
            val queue = Volley.newRequestQueue(context)

            //     Thread.sleep(1000);
            val url = "http://192.168.1.114:3000/createGoal?id=OWVH344&index="+goal.text.toString()+"&amount="+amount.text.toString();

// Request a string response from the provided URL.

            val stringRequest = StringRequest(
                Request.Method.GET, url,
                Response.Listener<String> { response ->
                    run {
                        Log.i("hey", response.toString())
                        // Display the first 500 characters of the response string.
                        this.activity?.runOnUiThread(Runnable {
                            textView.text =  response.toString() + "\n";

                        })
                        //   Toast.makeText(context, "Response is: ${response.substring(0, 500)}", Toast.LENGTH_LONG).show();
                    }
                },
                Response.ErrorListener { textView.text = "That didn't work!" })

// Add the request to the RequestQueue.
            queue.add(stringRequest)
        }
        transactionViewModel.text.observe(viewLifecycleOwner, Observer {
            textView.text = it
        })
        return root
    }
}