package main

import (
	"encoding/json"
	"fmt"
)

type Service struct {
	Name    string   `json:"name"`
	Ports   []int    `json:"ports"`
	Enabled bool     `json:"enabled"`
}

func main() {
	service := Service{Name: "gateway", Ports: []int{8080, 8443}, Enabled: true}
	payload, _ := json.MarshalIndent(service, "", "  ")
	fmt.Println(string(payload))
}
