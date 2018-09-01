import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import "./CustomPagination.css";

class CustomPagination extends Component {
	render(){
		return (
			<Pagination aria-label="Page navigation CustomPagination" className="customPagination" size="md">
			
				<PaginationItem>
					<PaginationLink previous href="#" />
				</PaginationItem>
				
				<PaginationItem active>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				
				<PaginationItem>
					<PaginationLink href="#">2</PaginationLink>
				</PaginationItem>
				
				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>
				
				<PaginationItem disabled className="etc">
					<PaginationLink href="#">...</PaginationLink>
				</PaginationItem>
				
				<PaginationItem>
					<PaginationLink href="#">14</PaginationLink>
				</PaginationItem>
				
				<PaginationItem>
					<PaginationLink next href="#" />
				</PaginationItem>
				
			</Pagination>
		);
	}
}

export default CustomPagination;