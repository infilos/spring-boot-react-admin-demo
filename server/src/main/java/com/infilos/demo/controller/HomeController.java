package com.infilos.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@SuppressWarnings("ALL")
public class HomeController {

    @RequestMapping("/")
    public String index() {
        return "index.html";
    }
}
