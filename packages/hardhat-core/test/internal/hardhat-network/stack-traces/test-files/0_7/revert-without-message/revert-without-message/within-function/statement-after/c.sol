pragma solidity ^0.7.0;

contract C {

  uint i = 0;

  function test() public {


    revert();
    i += 1;
  }

}
