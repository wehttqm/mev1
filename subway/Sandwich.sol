// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.9;

contract Sandwich {
    uint256 public x;
    uint256 public y;

    function getx() public view returns (uint256) {
        return x;
    }

    function gety() public view returns (uint256) {
        return y;
    }

    receive() external payable {}

    fallback() external payable {
        assembly {
            let value := calldataload(0x00)
            sstore(x.slot, value)
        }
    }
}