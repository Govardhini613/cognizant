package com.cognizant.springrest.controller;

import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import com.cognizant.springrest.model.Country;
import com.cognizant.springrest.service.CountryService;

@RestController
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping("/countries")
    public List<Country> getCountries() {
        return countryService.getAllCountries();
    }
    @GetMapping("/country/{code}")
public Country getCountry(@PathVariable String code) {
    return countryService.getCountry(code);
}
    @PostMapping("/country")
public Country addCountry(@RequestBody Country country) {
    return country;
}

}