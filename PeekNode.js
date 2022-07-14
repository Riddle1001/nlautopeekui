
function autopeek_node() {
    this.addInput("AutoPeek", "boolean");
    this.size = [220, 60]
}

//name to show
autopeek_node.title = "AutoPeek";

autopeek_nodes = [];

autopeek_node.prototype.onNodeCreated = function(node) {
    autopeek_nodes.push(node)
}

autopeek_node.prototype.onExecute = function() {
    this.getInputData(0) ? this.peek = true : this.peek = false;
    this.bgcolor = this.peek ? "rgba(0,100,0,1)" : "rgba(100,0,0,1)";
}

LiteGraph.registerNodeType("basic/Peek", autopeek_node)

