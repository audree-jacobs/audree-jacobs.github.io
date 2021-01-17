from names import given_name, family_name, full_name
import pytest

def test_full_name():
    assert full_name("Taylor", "Fuller") == "Fuller; Taylor"
    assert full_name("taylor", "Fuller") == "Fuller; taylor"

def test_given_name():
    assert given_name("Fuller;Taylor") == "Taylor"

def test_family_name():
    assert family_name("Fuller;Taylor") == "Fuller"

pytest.main(["python/test_names.py"])  
