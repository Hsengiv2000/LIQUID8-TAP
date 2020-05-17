package com.example.taptrial

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.navigation.findNavController
import androidx.navigation.ui.AppBarConfiguration
import androidx.navigation.ui.setupActionBarWithNavController
import androidx.navigation.ui.setupWithNavController
import com.google.android.material.bottomnavigation.BottomNavigationView


class SplashScreenActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.fragment_launch)

        val background=object :Thread() {
            override fun run() {
                try{
                    Thread.sleep(5000)

                    val intent= Intent(baseContext,LoginActivity::class.java)
                    startActivity(intent)
                } catch(e: Exception) {
                    e.printStackTrace()
                }
            }
        }
        background.start()

    }


}
