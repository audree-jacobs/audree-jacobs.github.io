from chemistry import get_name, get_atomic_mass, \
        parse_formula, molar_mass, FormulaError
from pytest import approx
import pytest
import math


def test_names():
    """Test the chemistry.get_name function."""
    assert chemistry.get_name(H) == "Hydrogen"
    


def test_atomic_masses():
    """Test the chemistry.get_atomic_mass function."""
    assert chemistry.get_atomic_mass(H) == approx(1.01) 


def test_parse():
    """Test the chemistry.parse_formula function."""
    assert chemistry.parse_formula() == 


def test_molar_mass():
    """Test the chemistry.molar_mass function."""
    assert molar_mass(parse_formula("H2O")) == approx(18.01528)
    assert molar_mass(parse_formula("C6H6")) == approx(78.11184)
    assert molar_mass(parse_formula("PO4H2(CH2)12CH3")) == approx(280.34072)


# Call the main function that is part of pytest so that
# the test functions in this file will start executing.
pytest.main(["test_chemistry.py"])
