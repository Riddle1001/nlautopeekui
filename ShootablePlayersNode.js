
function shootable_player_node() {
    this.addOutput("Value","number");
    this.widget = this.addWidget("number","Shootable players",1,"value");
    this.size = [220, 60]
}

//name to show
shootable_player_node.title = "Shootable players";

shootable_player_node.prototype.onNodeCreated = function(node) {
    shootable_players_nodes.push(node)
}

LiteGraph.registerNodeType("basic/shootable_players", shootable_player_node)

